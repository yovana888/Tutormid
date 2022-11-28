import React, { useState} from "react";
import NewModal from '../../NewModal/NewModal';
import Button from '../../../../Components/Elements/Button/Button'
import Form from 'react-bootstrap/Form';
import TextField from '../../../../Components/Elements/TextField/TextField';
import { TfiUser,TfiEmail, TfiEye  } from "react-icons/tfi";


interface Props {
    toggle: any;
    isOpen: boolean;
}






export default function ModalRegister({ isOpen, toggle }: Props) {

  
  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={'Únase a Tutormid hoy'}>
        <>

        <Form.Select className="py-2" >
          <option disabled> Seleccione su rol </option>
          <option> Estudiante </option>
          <option> Maestro </option>
        </Form.Select>

        <Button text="Ingresa con Google " size="lg-size" isGoogle  className="google mt-4" />    

        <div className="d-flex py-4"> 
          <img src="./src/assets/line.svg"  className='px-2'  alt="" />
          <img src="./src/assets/icon-circle.svg"  className='px-2' alt="" />
          <img src="./src/assets/line.svg" className='px-4' alt="" />
        </div>
  
        <TextField
            icon={<TfiUser />}
            edge="end"
            label="Nombre y Apellidos"
            name="text"
            type="text"
            placeholder="Nombre completo"
            width100={true}
        /><br />

          <TextField
            icon={<TfiEmail />}
            edge="end"
            label="Email"
            name="Email"
            type="text"
            placeholder="email@gmail.com"
            width100={true}
          /><br />

        <TextField
            icon={<TfiEye />}
            edge="end"
            label="Contraseña"
            name="password"
            type="password"
            placeholder="************"
            width100={true}
          /><br />

      
          <Button text="Registrarme" size="lg-size" className="mb-4"/> 
        </>
    </NewModal>
  )
}
