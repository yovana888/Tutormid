import React from 'react'
import { NavbarContainer } from './Style'
import { NavbarWrapper } from './Style'
import { IconLogo } from './Style'
import { Menu } from './Style'
import { MenuItem } from './Style'
import { MenuItemLink } from './Style'
import { StyledButton } from './Style'
import { IconLogoMobile } from './Style'
import { FaBars } from 'react-icons/fa';
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { NavDropdown } from 'react-bootstrap';

import NewLink from '../../Elements/NewLink/NewLink'

import ModalLogin from './Modals/ModalLogin'
import ModalRegister from './Modals/ModalRegister'

export default function Navbar() {

  const [click, setClick] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  }
  const handleLogin = () => setIsLogin(!isLogin);
  const handleLogout = () => setIsLogin(false);

  // ------------------------------Acciones para Abrir Modal Login------------------------------

  const [showModalLogin, setshowModalLogin] = useState(false);
  const toggleModalLogin = () => {
    setshowModalLogin(!showModalLogin)
  }

  // ------------------------------Acciones para Abrir Modal Register------------------------------

  const [showModalRegister, setshowModalRegister] = useState(false);
  const toggleModalRegister = () => {
    setshowModalRegister(!showModalRegister)
  }


  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo> <img src='./src/assets/logo.svg' width={140} alt="logo" /></IconLogo>
          <IconLogoMobile onClick={() => ChangeClick()}>
            {
              click ? <FaTimes /> : <FaBars />
            }
          </IconLogoMobile>
          <Menu click={click} >
            <MenuItem onClick={() => ChangeClick()}>
              <NewLink name='Home' path='/' type='menu' />
            </MenuItem>
            <MenuItem onClick={() => ChangeClick()}>
              <NewLink name='Anuncios' path='/ads' type='menu' />
            </MenuItem>
            <MenuItem onClick={() => ChangeClick()}>
              <NewLink name='Contactanos' type='menu' />
            </MenuItem>
            {
              isLogin ?
                <>
                  <MenuItem>
                    <NavDropdown title={
                      <span style={{ marginRight: "10px" }}>Bienvenido(a) <img src='./src/assets/icon-user.svg' /></span>
                    } id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#">Mi cuenta</NavDropdown.Item>
                      <NavDropdown.Item href="#!" onClick={() => handleLogout()}>Salir</NavDropdown.Item>
                    </NavDropdown>
                  </MenuItem>
                </>
                :
                <>
                  <MenuItem onClick={() => { toggleModalLogin() }} >
                    <NewLink name='Ingresar' type='menu' />
                  </MenuItem>
                  <StyledButton onClick={() => { toggleModalRegister() }} >Registrarse</StyledButton>
                </>
            }
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>

      {  /* ------------------------------ Modal Login  ------------------------------*/}
      <ModalLogin
        isOpen={showModalLogin}
        toggle={toggleModalLogin}
      />

      {  /* ------------------------------ Modal Register  ------------------------------*/}
      <ModalRegister
        isOpen={showModalRegister}
        toggle={toggleModalRegister}
      />

    </>
  )
}
