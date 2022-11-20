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







export default function Navbar() {

  const [click, setClick] = useState(false); 

  const ChangeClick = () => { 
    setClick(!click);
  
  }

  const [isLogin, setIsLogin] = useState(false);

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
          {isLogin && 
                /** AQUI IRA EL COMPONENTE DEL IMG PERFIL + MENU SALIR Y MI PERFIL */
                <img src='./src/assets/logo.svg' width={140} alt="logo" />
          }
          <Menu click={click} > 

            <MenuItem onClick={() => ChangeClick() }>
              <MenuItemLink to="/"> Home </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick() }>
              <MenuItemLink to="/ads"> Anuncios </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick() }>
              <MenuItemLink> Contactanos </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={() => ChangeClick() }>
              <MenuItemLink> Ingresar </MenuItemLink>
            </MenuItem>
            <StyledButton> Registrarse </StyledButton>  
          </Menu>
      </NavbarWrapper>
    </NavbarContainer>
    </>
  )
}
