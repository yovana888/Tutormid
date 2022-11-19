import React from 'react'
import { Outlet } from 'react-router-dom';
import NewButton from '../../Components/Elements/Button/ButtonStyled';
import Footer from '../../Components/Groups/Footer/Footer'; 

export default function Main() {

  return (
    <div>
      Main Layout
      <Outlet />
      <Footer />
    </div>
  )
}
