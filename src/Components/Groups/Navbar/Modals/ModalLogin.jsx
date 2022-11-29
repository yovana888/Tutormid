import React, { useState } from "react";
import NewModal from '../../NewModal/NewModal';
import Button from '../../../Elements/Button/Button';
import NewLink from '../../../Elements/NewLink/NewLink';
import TextField from '../../../Elements/TextField/TextField';
import { login } from '../../../../supabase/services/auth'
import { TfiEmail, TfiEye } from "react-icons/tfi";
import Form from 'react-bootstrap/Form';


export default function ModalLogin({ isOpen, toggle }) {

  const [input, setInput] = useState({
    email:'',
    password:''
   });

   const handlerSubmit = async(event) => {
    event.preventDefault();
   
}
  
  const handlerInput = (e) => {
    let { name, value } = e.target;
    setInput({
        ...input,
        [name]: value
    });
   }

  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={'Bienvenido a Tutormid'}>
        <>

        <Button text="Ingresa con Google " isGoogle  color="outline"
          size="lg-size" />

        <div className="d-flex py-3">
          <img src="./src/assets/line.svg"  className='px-2'  alt="" />
          <img src="./src/assets/icon-circle.svg"  className='px-2' alt="" />
          <img src="./src/assets/line.svg" className='px-4' alt="" />
        </div>

          <TextField
            icon={<TfiEmail />}
            edge="end"
            label="Email"
            name="Email"
            type="text"
            placeholder="email@gmail.com"
            width100={true}
            value={input.email}
            onChange={handlerInput}
          /><br />

          <TextField
            icon={<TfiEye />}
            edge="end"
            label="Contraseña"
            name="password"
            type="password"
            placeholder="************"
            width100={true}
            value={input.email}
            onChange={handlerInput}
          /><br />

          <div className="d-flex justify-content-between mt-0">
            <Form.Check
                required
                label="Recuerdame"
                feedback="You must agree before submitting."
                feedbackType="invalid"
             />
              <NewLink name="Olvide mi contraseña" onClick={()=>{console.log('hice click')}}/>
          </div>
          
          <Button text="Ingresar" size="lg-size" className="mt-4" />

          <div className="d-flex justify-content-between mt-4"> 
              <p> Aun no estás registrado?  </p>
              <NewLink name="Crea una cuenta" onClick={()=>{console.log('hice click')}}/>
          </div>
        </>
    </NewModal>


  )
}


