import React from 'react'
import { Outlet } from 'react-router-dom';
import NewButton from '../../Components/Elements/Button/ButtonStyled';


export default function Main() {

  return (
    <div>
      Main Layout
      <Outlet />
    </div>
  )
}
