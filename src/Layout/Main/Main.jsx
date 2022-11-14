import React from 'react'
import { Outlet  } from "react-router-dom";
import ButtonStyle from '../../Components/Elements/ButtonStyle';
import Button from 'react-bootstrap/Button';


export default function Main() {
  return (
    <div>
          Main Layout
          <ButtonStyle/>
          <Outlet/>
    </div>
  )
}
