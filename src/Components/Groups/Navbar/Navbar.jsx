import React from 'react'
import { NavbarContainer } from './Style'
import { NavbarWrapper } from './Style'
import { IconLogo } from './Style'
import { Menu } from './Style'
import { MenuItem } from './Style'
import { MenuItemLink } from './Style'
import { StyledButton } from './Style'
import { IconLogoMobile } from './Style'
import {FaBars} from 'react-icons/fa'; 
import {useState} from 'react'
import {FaTimes} from 'react-icons/fa';
import { NavDropdown } from 'react-bootstrap';
import { Fragment } from 'react-is/cjs/react-is.development'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Buttons } from './Style'
import {StyledIcons} from './Style'
import {ContainerModal} from './Style'
import { Link } from 'react-router-dom'
import { colors } from '../../../Styles/colors'


export default function Navbar() {

  const [click, setClick] = useState(false); 
  const [isLogin, setIsLogin] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  }
  const handleLogin = () => setIsLogin(!isLogin);
  const handleLogout = () => setIsLogin(false);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
    <NavbarContainer> 
      <NavbarWrapper>
          <IconLogo> <img src='./src/assets/logo.svg' width={140} alt="logo" /></IconLogo>
          <IconLogoMobile onClick={() => ChangeClick() }> 
          {
            click ? <FaTimes/> : <FaBars/>
          }
          </IconLogoMobile>    
          <Menu click={click} > 
            <MenuItem onClick={() => ChangeClick() }>
              <MenuItemLink to="/">Home</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick() }>
              <MenuItemLink to="/ads">Anuncios</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick() }>
              <MenuItemLink>Contáctanos</MenuItemLink>
            </MenuItem>
            {
              isLogin ?
              <>
                <MenuItem>
                  <NavDropdown title={
                    <span style={{marginRight: "10px"}}>Bienvenido(a) <img src='./src/assets/icon-user.svg' /></span>
                  } id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#">Mi cuenta</NavDropdown.Item>
                    <NavDropdown.Item href="#!" onClick={() => handleLogout() }>Salir</NavDropdown.Item>
                  </NavDropdown>
                </MenuItem>
              </>
              :
              <>
                <MenuItem onClick={() => handleLogin() }>
                  <MenuItemLink >Ingresar</MenuItemLink>
                </MenuItem>
                <StyledButton onClick={handleShow}>Registrarse</StyledButton>
              </>
            }

        <Modal show={show} onHide={handleClose}>
          <ContainerModal> 
            <Modal.Title className='mx-4 my-4 mb-0'>Únase a Tutormid hoy</Modal.Title>
                    {/* AQUI EMPIZA LOS FORM DEL BUTTON REGISTER  */}
            <Modal.Body className='mt-0' >  
              <Form.Group className="mb-3">
                  <Form.Select >
                    <option disabled> Seleccione su rol </option>
                    <option> Estudiante </option>
                    <option> Maestro </option>
                  </Form.Select>
              </Form.Group>

              <Buttons className='py-1' variant="outline-secondary"   type="submit" >
                 <Link to="www.gooogle.com.pe" className='text-decoration-none'> <img src="./src/assets/icon-google.svg" alt="" />  <span>  Registrate con Google   </span> </Link>  
              </Buttons>

              <StyledIcons > 
                <img src="./src/assets/line.svg"  className=''  alt="" />
                <img src="./src/assets/icon-circle.svg"  className='px-1' alt="" />
                <img src="./src/assets/line.svg" className='px-4' alt="" />
              </StyledIcons>

              <Form.Group className="mb-3 my-3" controlId="formBasicPassword">
                  <Form.Label className='mb-1'> <b> Nombres y Apellidos</b> </Form.Label>
                  <div>
                    <Form.Control type="text" placeholder="Password"  /> 
                  </div>
              </Form.Group>

              <Form.Group className="mb-3 my-3" controlId="formBasicPassword">
                  <Form.Label className='mb-1'> <b> Email </b> </Form.Label>
                  <div>
                    <Form.Control type="password" placeholder="email@gmail.com"  /> 
                  </div>
              </Form.Group>

              <Form.Group className="mb-3 my-3" controlId="formBasicPassword">
                  <Form.Label className='mb-1'> <b> Contraseña </b> </Form.Label>
                  <div>
                    <Form.Control type="password" placeholder="***********"  /> 
                  </div>
              </Form.Group>

              <Buttons className='py-1 '  type="submit" >
                 <Link to="www.gooogle.com.pe" className='text-decoration-none'>  <span>  Registrarme </span> </Link>  
              </Buttons>

            </Modal.Body>
                  {/* AQUI TERMINA EL FORM DE RISTER */}

          <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
          </Modal.Footer>

          </ContainerModal>
        </Modal>



          </Menu>
      </NavbarWrapper>
    </NavbarContainer>
    </>
  )
}
