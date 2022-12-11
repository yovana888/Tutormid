import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Styles'

export default function NavbarStd() {
  return (
    <Navbar className='nav  '>
      <span className='nav-logo'>Tutormid</span>
      <div className='nav-items'>
        <Link to="/dashboardst">Panel de Control</Link>
        <Link to="/ads">Profesores</Link>
        <Link to="/chat">Mis mensajes</Link>
      </div>
    </Navbar>
  )
}
