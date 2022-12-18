import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";
import NewLink from "../../Elements/NewLink/NewLink";
import Button from "../../Elements/Button/Button";
import ModalLogin from "./Modals/ModalLogin";
import ModalRegister from "./Modals/ModalRegister";
import ModalForgetPass from "./Modals/ModalForgetPass";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth.context";

import {
  NavbarContainer,
  NavbarWrapper,
  IconLogo,
  Menu,
  MenuItem,
  IconLogoMobile,
  NameUser,
} from "./Style";

export default function Navbar() {
  const { isLogin, user, logout } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const ChangeClick = () => {
    setClick(!click);
  };

  // ------------------------------Acciones para Abrir Modal Login------------------------------

  const [showModalLogin, setshowModalLogin] = useState(false);
  const toggleModalLogin = () => {
    setshowModalLogin(!showModalLogin);
  };

  // ------------------------------Acciones para Abrir Modal Register------------------------------

  const [showModalRegister, setshowModalRegister] = useState(false);
  const toggleModalRegister = () => {
    setshowModalRegister(!showModalRegister);
  };

  // ------------------------------Acciones para Abrir Modal Forget Password------------------------------

  const [showModalPassword, setshowModalPassword] = useState(false);
  const toggleModalPassword = () => {
    setshowModalPassword(!showModalPassword);
  };

  const goPanel = () => {
    navigate(user.rol == "estudiante" ? "/student" : "/teacher");
  };
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            {" "}
            <img src="/Logo.svg" width={140} alt="logo" />
          </IconLogo>
          <IconLogoMobile onClick={() => ChangeClick()}>
            {click ? <FaTimes /> : <FaBars />}
          </IconLogoMobile>
          <Menu click={click}>
            <MenuItem onClick={() => ChangeClick()}>
              <NewLink name="Home" path="/" type="menu" />
            </MenuItem>
            <MenuItem onClick={() => ChangeClick()}>
              <NewLink name="Anuncios" path="/ads" type="menu" />
            </MenuItem>
            <MenuItem onClick={() => ChangeClick()}>
              <NewLink name="Contactanos" type="menu" />
            </MenuItem>
            {isLogin ? (
              <>
                <MenuItem>
                  <NavDropdown
                    title={
                      <NameUser>
                        {user.full_name.split(" ")[0]}{" "}
                        <img src={user.photo_url} />
                      </NameUser>
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item onClick={() => goPanel()}>
                      Mi Cuenta
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => logout()}>
                      Salir
                    </NavDropdown.Item>
                  </NavDropdown>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    toggleModalLogin();
                  }}
                >
                  <NewLink name="Ingresar" type="menu" />
                </MenuItem>
                <Button
                  onClick={() => {
                    toggleModalRegister();
                  }}
                  text="Registrarse"
                  size="small-size"
                  responsiveRight
                />
              </>
            )}
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>

      {/* ------------------------------ Modal Login  ------------------------------*/}
      <ModalLogin
        isOpen={showModalLogin}
        toggle={toggleModalLogin}
        toggleModalRegister={toggleModalRegister}
        toggleModalPassword={toggleModalPassword}
      />

      {/* ------------------------------ Modal Register  ------------------------------*/}
      <ModalRegister
        isOpen={showModalRegister}
        toggle={toggleModalRegister}
        toggleModalLogin={toggleModalLogin}
      />

      {/* ------------------------------ Modal Password  ------------------------------*/}
      <ModalForgetPass
        isOpen={showModalPassword}
        toggle={toggleModalPassword}
      />
    </>
  );
}
