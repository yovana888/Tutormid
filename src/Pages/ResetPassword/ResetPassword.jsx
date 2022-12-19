import React, { useState } from "react";
import TextField from "../../Components/Elements/TextField/TextField";
import Button from "../../Components/Elements/Button/Button";
import NewLink from "../../Components/Elements/NewLink/NewLink";
import { useNavigate } from 'react-router-dom';
import { FormContainer, Container } from "./Style";
import { useFormik } from "formik";
import { TextError } from "../../Components/Elements/TextValidate/TextValidate";
import { TfiEye } from "react-icons/tfi";
import { validationSchemaConfirmPassword } from "../../validators/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { supabase } from "../../supabase/client";

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  
  /****************************Inicializamos Formik*************************************** */

  const formik = useFormik({
    initialValues: {
      password: "",
      repeatpassword: "",
    },
    validationSchema: validationSchemaConfirmPassword,
    isInitialValid: true,
    onSubmit: function (values) {
      resetPassword(values.password);
    },
  });
  
  /****************************Funcion para cambiar contraseña*************************************** */

  const resetPassword = async(password) => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    })
    if(data) {
      toast.info("Su contraseña se actualizó exitosamente", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate('/');
    }

    if(error){
      toast.info(error.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    setIsLoading(false);
  };

  return (
    <Container>
      <img src="/Logo.svg" alt="" width={130} />
      <FormContainer onSubmit={formik.handleSubmit}>
        <TextField
          icon={
            <TfiEye
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
            />
          }
          edge="end"
          label="Ingresa tu nueva contraseña"
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

        <TextField
          edge="end"
          label="Confirmar contraseña"
          type={isShowPassword ? "text" : "password"}
          placeholder="************"
          width100={true}
          name="repeatpassword"
          onChange={formik.handleChange}
          value={formik.values.repeatpassword}
        />

        {formik.touched.repeatpassword && formik.errors.repeatpassword && (
          <TextError>{formik.errors.repeatpassword}</TextError>
        )}

        <Button
          text={isLoading ? "Procesando..." : "Restablecer Contraseña"}
          size="lg-size"
          type="submit"
          className="mt-2"
          disabled={isLoading ? true : false}
        />
       <div>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NewLink name="Volver a Inicio" />
          </Link>
       </div>
      </FormContainer>
    </Container>
  );
}
