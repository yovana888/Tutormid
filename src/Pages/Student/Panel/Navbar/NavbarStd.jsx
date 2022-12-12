import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar,NavLogo, NavItems, Notification, MenuSession, NavOptions, UserItems, NavToggle, Bar} from './Styles'

export default function NavbarStd() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <Navbar className=''>
      <NavLogo className='' to="./"><img src="/LogoTutormid.svg" alt="" /></NavLogo>
      <NavItems className={`${isOpen && "open"}`}>
          <NavOptions to="/dashboardst">Panel de Control</NavOptions>
          <NavOptions to="/ads">Profesores</NavOptions>
          <NavOptions to="/chat">Mis mensajes</NavOptions>
          <UserItems>
            <div><Notification/></div>
            <img src="/Ellipse 27.svg" alt="" />
            <div><MenuSession/></div> 
          </UserItems>            
      </NavItems>

      <NavToggle className={`${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
        <Bar className=''>
        </Bar>
      </NavToggle>
    </Navbar>
  )
}
