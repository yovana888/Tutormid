import React, { useState, useEffect } from "react";
import NewModal from "../../NewModal/NewModal";
import Button from "../../../Elements/Button/Button";
import TextField from "../../../Elements/TextField/TextField";
import { TfiEmail } from "react-icons/tfi";
import { useFormik } from "formik";
import { ContainerForm } from "./Style";
import { validationSchemaPassword } from "../../../../validators/auth";
import { TextError } from "../../../Elements/TextValidate/TextValidate";
import { toast } from "react-toastify";
import { supabase } from "../../../../supabase/client";

export default function ModalForgetPass({ isOpen, toggle }) {
  const [isLoading, setIsLoading] = useState(false);

  /****************************Inicializamos Formik*************************************** */

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchemaPassword,
    isInitialValid: true,
    onSubmit: function (values) {
      sendEmailForgetPassword(values);
    },
  });

  /****************************Funcion para enviar email forget password****************************** */

  const sendEmailForgetPassword = async (values) => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      values.email
    );
    if (data) {
      toast.info("Hemos enviado un enlace a tu correo, no olvides revisar tu spam", {
        position: toast.POSITION.TOP_RIGHT,
      });
      toggle();
    }

    if (error) {
      toast.error(error.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setIsLoading(false);
  };

  /**************************Funcion para resetar el formulario****************************** */

  const resetForm = () => {
    formik.resetForm();
    formik.setErrors({});
  };

  /**************************Reseteamos una vez que abrimos el modal****************************** */
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <NewModal
      isOpen={isOpen}
      toggle={toggle}
      title={"Olvidaste tu contraseña?"}
    >
      <>
        <ContainerForm onSubmit={formik.handleSubmit}>
          <TextField
            icon={<TfiEmail />}
            edge="end"
            label="Ingresa el email con la que te registraste"
            type="text"
            placeholder="user@gmail.com"
            width100={true}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <TextError>{formik.errors.email}</TextError>
          )}
          <Button
            text={isLoading ? "Procesando..." : "Restablecer Contraseña"}
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
