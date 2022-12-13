import React from 'react'
import { Outlet } from 'react-router-dom';
import NavbarDashboard from '../../Components/Groups/NavbarDashboard/NavbarDashboard'
export default function Dashboard() {
  return (
    <>
        <NavbarDashboard/>
         <Outlet />
    </>
  )
}
