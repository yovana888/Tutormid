import React, { useState } from "react";
import NewModal from "../../NewModal/NewModal";
import Button from "../../../Elements/Button/Button";
import TextField from "../../../Elements/TextField/TextField";
import Line from "../../../Elements/Line/Line";
import { NewSelect } from "../../../Elements/NewSelect/NewSelect";
import { TfiEmail, TfiEye } from "react-icons/tfi";
import { ContainerForm } from "./Style";
import { registerService, registerGoogleService } from "../../../../supabase/services/auth";
import { validate } from "../../../../validators/auth.validator"
import { TextError } from "../../../Elements/TextValidate/TextValidate"
import {toast } from 'react-toastify';


export default function ModalRegister({ isOpen, toggle }) {
  const roles = [
    { value: "docente", label: "Docente" },
    { value: "estudiante", label: "Estudiante" },
  ];
  const [rol, setRol] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [input, setInput] = useState({
    email:'',
    password:'',
    rol:''
   });

  const [formErrors, setFormErrors] = useState({ 
    email:'',
    password:'',
    rol:''
  });


  const handlerInput = () => {
    let { name, value } = e.target;
    console.log(name, value,'dsde in')
    setFormErrors({
        ...formErrors,
        [e.target.name]: validate(e.target.value, e.target.name),
    });

    setInput({
        ...input,
        [name]: value
    });
   }


  const resetForm=()=> {
    setFormErrors({
      email:'',
      password:'',
      rol:''
   })

   setInput({
    email:'',
    password:'',
    rol:''
    })
    setRol(null);
  }


  const handleSelect = () => {
      setRol(option);
      setFormErrors({
        ...formErrors,
        rol: option!==null?'':'Rol es requerido'
      });
      setInput({
        ...input,
        rol: option!==null?option.value:''
      });
  };

  const validateForm = () => {
    let isvalidate = true
    const error='Este es un campo requerido';
    setFormErrors({
       email:input.email?'':error,
       password:input.password?'':error,
       rol:input.rol?'':error
    })
    if (Object.values(formErrors).some(item => item !== '' )===true){
        isvalidate=false
    }
    if (Object.values(input).some(item => item == '' )===true){
      isvalidate=false
    }

    return  isvalidate;
}

const handlerSubmit = async(event) => {
    event.preventDefault();
    try {
        if(validateForm()==false){
            throw new Error("Algunos campos no son válidos");
        }
        setIsLoading(true);

        await registerService(input).then(res=>{
            toast.info('Revisa tu correo, para confirmar tu cuenta', {
              position: toast.POSITION.TOP_RIGHT
            });
            resetForm();
            toggle();
         })

    }catch (err) {
      toast.error(err.message || "Ocurrio un error, intentelo mas tarde", {
        position: toast.POSITION.TOP_RIGHT
      });
    } finally{
      setIsLoading(false);
    }
   
}

const registerByGoogle =async ()=>{
    await registerGoogleService()
    .then(res=>console.log(res))
    .catch(e=>console.log(e))
}


  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={"Únase a Tutormid hoy"}>
      <>
      <ContainerForm onSubmit={handlerSubmit}>
        <NewSelect
          options={roles}
          placeholder="Seleccione su Rol"
          value={rol}
          onChange={handleSelect}
        />
         <TextError>{formErrors.rol}</TextError>
        <Button
          text="Registrate con Google"
          color="outline"
          size="lg-size"
          type="button"
          isGoogle
          className="mt-2"
          onClick={registerByGoogle}
        />

        <Line />
        <TextField
          icon={<TfiEmail />}
          edge="end"
          label="Email"
          type="text"
          placeholder="user@gmail.com"
          width100={true}
          name='email'
          value={input.email}
          onChange={handlerInput}
        />
        <TextError>{formErrors.email}</TextError>

        <TextField
          icon={<TfiEye onClick={()=>{setIsShowPassword(!isShowPassword)}}/>}
          edge="end"
          label="Password"
          type={isShowPassword?'text':'password'}
          placeholder="***********"
          width100={true}
          name='password'
          value={input.password}
          onChange={handlerInput}
        />
        <TextError>{formErrors.password}</TextError>
        <Button
          text={isLoading?'Procesando...':'Registrarme'}
          size="lg-size"
          type="submit"
          className="mt-2"
          disabled={isLoading?true:false}
        />
      </ContainerForm>

      </>
    </NewModal>
  );
}
