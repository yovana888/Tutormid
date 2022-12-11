import React from 'react'
import { Outlet } from 'react-router-dom';
import NavbarStd from '../../Pages/Student/Panel/Navbar/NavbarStd'
export default function Dashboard() {
  return (
    <div>
        <NavbarStd/>
         <Outlet />
    </div>
  )
}
