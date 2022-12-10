import React, { useState, useContext } from "react";
import NewModal from "../../NewModal/NewModal";
import Button from "../../../Elements/Button/Button";
import NewLink from "../../../Elements/NewLink/NewLink";
import TextField from "../../../Elements/TextField/TextField";
import Form from "react-bootstrap/Form";
import { TfiEmail, TfiEye } from "react-icons/tfi";
import { ContainerForm } from "./Style";
import { TextError } from "../../../Elements/TextValidate/TextValidate";
import { useFormik } from "formik";
import { validationSchemaLogin } from "../../../../validators/auth";
import { login } from "../../../../supabase/services/auth";
import { AuthContext } from "../../../../context/auth.context";
import { toast } from "react-toastify";
import { sesionGoogleService } from "../../../../supabase/services/auth"

export default function ModalLogin({ isOpen, toggle }) {
  const { fetchUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
 
  /****************************Inicializamos Formik*************************************** */

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaLogin,
    isInitialValid: false,
    onSubmit: function (values) {
      loginUser(values);
    },
  });

   /****************************Funcion para Iniciar Sesion*************************************** */
  const loginUser = async (values) => {
    try {
      setIsLoading(true);
      await login(values).then((res) => {
        if (res.status == 500) throw res.message;
        fetchUser();
        resetForm();
        toggle();
      });
    } catch (err) {
      toast.error(err.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsLoading(false);
    }
  };

  /****************************Funcion para auth Google****************************** ****/

  const loginByGoogle =async ()=>{
    try {
      setIsLoadingGoogle(true);
      await sesionGoogleService().then(res => {
        resetForm();
        toggle();
      })
    } catch (error) {
      toast.error(error.toString(), {
        position: toast.POSITION.TOP_RIGHT
      });
    }finally{
      setIsLoadingGoogle(false);
    }
  }


/**************************** Funcion para resetear el form*************************************** */

  const resetForm = () => {
    formik.resetForm();
    formik.setErrors({});
  };

  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={"Bienvenido a Tutormid"}>
      <>
        <ContainerForm onSubmit={formik.handleSubmit}>
          
            <Button
              text={isLoadingGoogle ? 'Procesando...' : 'Ingresa con Google'}
              isGoogle
              color="outline"
              size="lg-size"
              disabled={isLoadingGoogle ? true : false}
              onClick={loginByGoogle}
            />
         

          <div className="d-flex py-3">
            <img src="./src/assets/line.svg" className="px-2" alt="" />
            <img src="./src/assets/icon-circle.svg" className="px-2" alt="" />
            <img src="./src/assets/line.svg" className="px-4" alt="" />
          </div>
           
          <TextField
            icon={<TfiEmail />}
            edge="end"
            label="Email"
            type="text"
            placeholder="email@gmail.com"
            width100={true}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <TextError>{formik.errors.email}</TextError>
          )}

          <TextField
            icon={
              <TfiEye
                onClick={() => {
                  setIsShowPassword(!isShowPassword);
                }}
              />
            }
            edge="end"
            label="Contraseña"
            type={isShowPassword ? "text" : "password"}
            placeholder="************"
            width100={true}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password && (
            <TextError>{formik.errors.password}</TextError>
          )}

          <div className="d-flex justify-content-between mt-0">
            <Form.Check label="Recuerdame" />
            <NewLink
              name="Olvide mi contraseña"
              onClick={() => {
                console.log("hice click");
              }}
            />
          </div>

          <Button
            text={isLoading ? "Procesando..." : "Ingresar"}
            size="lg-size"
            className="mt-4"
            type="submit"
            disabled={isLoading ? true : false}
          />
        </ContainerForm>
        <div className="d-flex justify-content-between mt-4">
          <p> Aun no estás registrado? </p>
          <NewLink
            name="Crea una cuenta"
            onClick={() => {
              console.log("hice click");
            }}
          />
        </div>
      </>
    </NewModal>
  );
}
