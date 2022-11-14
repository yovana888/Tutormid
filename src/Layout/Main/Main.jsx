import React from 'react'
import { Outlet } from 'react-router-dom'
import ButtonStyled from '../../Components/Elements/Button/ButtonStyled'

export default function Main() {
  return (
    <div>
      Main Layout
      <ButtonStyled/>
      <Outlet />
    </div>
  )
}
