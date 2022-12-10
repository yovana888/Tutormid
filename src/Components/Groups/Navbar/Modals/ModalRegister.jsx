import React, { useState, useEffect } from "react";
import NewModal from "../../NewModal/NewModal";
import Button from "../../../Elements/Button/Button";
import TextField from "../../../Elements/TextField/TextField";
import Line from "../../../Elements/Line/Line";
import { useFormik } from 'formik';
import { NewSelect } from "../../../Elements/NewSelect/NewSelect";
import { TfiEmail, TfiEye, TfiUser } from "react-icons/tfi";
import { ContainerForm } from "./Style";
import { validationSchemaRegister } from "../../../../validators/auth"
import { TextError } from "../../../Elements/TextValidate/TextValidate"
import { registerService, sesionGoogleService } from "../../../../supabase/services/auth";
import { toast } from 'react-toastify';



export default function ModalRegister({ isOpen, toggle }) {

  const roles = [
    { value: "docente", label: "Docente" },
    { value: "estudiante", label: "Estudiante" },
  ];
  
  const [rol, setRol] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);


  /****************************Inicializamos Formik*************************************** */

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rol: '',
      fullname:''
    },
    validationSchema: validationSchemaRegister,
    isInitialValid: false,
    onSubmit: function (values) {
      registerUser(values)
    }
  })

  /****************************Funcion para registro de usuario****************************** */

  const registerUser = async (values) => {
    try {
      setIsLoading(true);

      await registerService(values).then(res => {
        if(res){
          toast.info('Revisa tu correo, para confirmar tu cuenta', {
            position: toast.POSITION.TOP_RIGHT
          });
          resetForm();
          toggle();
        }
        if (res?.status == 500) throw res.message;
      })

    } catch (err) {
      toast.error(err.toString() || "Ocurrio un error, intentelo mas tarde", {
        position: toast.POSITION.TOP_RIGHT
      });
    } finally {
      setIsLoading(false);
    }
  }
   
  /****************************Funcion para auth Google****************************** ****/

    const registerByGoogle =async ()=>{
      try {
        if (rol==null) throw "Debe selecionar un rol!";
        setIsLoadingGoogle(true);
        await sesionGoogleService().then(res => {
          localStorage.setItem('googleRol',rol.value);
          resetForm();
          toggle();
        })
      } catch (error) {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT
        });
      } finally{
        setIsLoadingGoogle(false);
      }
    }

  /****************************Funcion para cuando cambia el select****************************** */

  const handleSelect = (option) => {
    setRol(option);
    formik.setFieldValue("rol", option.value)
  }

  /**************************Funcion para resetar el formulario****************************** */

  const resetForm = () => {
    formik.resetForm()
    formik.setErrors({})
    setRol(null);
  }

  /**************************Reseteamos una vez que abrimos el modal****************************** */

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={"Únase a Tutormid"}>
      <>
        <ContainerForm onSubmit={formik.handleSubmit}>
          <NewSelect
            options={roles}
            placeholder="Seleccione su Rol"
            value={rol}
            name='rol'
            onChange={handleSelect}
            isClearable={false}
          />
          {formik.touched.rol && formik.errors.rol && (
            <TextError>{formik.errors.rol}</TextError>
          )}

           <Button
              text={isLoadingGoogle ? 'Procesando...' : 'Registrate con Google'}
              color="outline"
              size="lg-size"
              type="button"
              isGoogle
              className="mt-2"
              disabled={isLoadingGoogle ? true : false}
              onClick={registerByGoogle}
            />

            <Line />

          <TextField
            icon={<TfiUser />}
            edge="end"
            label="Nombre y Apellidos"
            type="text"
            placeholder=""
            width100={true}
            name='fullname'
            onChange={formik.handleChange}
            value={formik.values.fullname}
          />

          {formik.touched.fullname && formik.errors.fullname && (
            <TextError>{formik.errors.fullname}</TextError>
          )}

          <TextField
            icon={<TfiEmail />}
            edge="end"
            label="Email"
            type="text"
            placeholder="user@gmail.com"
            width100={true}
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          {formik.touched.email && formik.errors.email && (
            <TextError>{formik.errors.email}</TextError>
          )}

          <TextField
            icon={<TfiEye onClick={() => { setIsShowPassword(!isShowPassword) }} />}
            edge="end"
            label="Password"
            type={isShowPassword ? 'text' : 'password'}
            placeholder="***********"
            width100={true}
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password && (
            <TextError>{formik.errors.password}</TextError>
          )}

          <Button
            text={isLoading ? 'Procesando...' : 'Registrarme'}
            size="lg-size"
            type="submit"
            className="mt-2"
            disabled={isLoading ? true : false}
          />
        </ContainerForm>

      </>
    </NewModal>
  );
}
