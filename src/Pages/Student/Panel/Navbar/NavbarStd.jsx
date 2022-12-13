import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar,NavLogo, Notification, MenuSession, UserItems} from './Styles';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoMdExit } from 'react-icons/io';


export default function NavbarStd() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <Navbar className='nav-bar'>
      <div className='space'>
        <NavLogo className='nav-logo' to="/"><img src="/LogoTutormid.svg" alt="" /></NavLogo>
        <div className={`nav-items ${isOpen && "open"}`}>
            <Link className='nav-options' to="/dashboardst">Panel de Control</Link>
            <Link className='nav-options' to="/ads">Profesores</Link>
            <Link className='nav-options' to="/chat">Mis mensajes</Link>
        </div>
                  

        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <div className='bar'>
          </div>
        </div>
      </div>
      <UserItems className='user-items'>
            <div ><Notification/></div>
            <img src="/Ellipse 27.svg" alt="" />
            <Dropdown>
              <Dropdown.Toggle>
                <MenuSession/>             
              </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item><IoMdExit/> Salir</Dropdown.Item>
      </Dropdown.Menu>
            </Dropdown> 
        </UserItems> 
    </Navbar>
  )
}
