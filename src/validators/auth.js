import * as Yup from 'yup';

export const validationSchemaRegister =
Yup.object({
    email: Yup.string()
        .email('Email no válido')
        .required("Email es requerido"),
    password: Yup.string()
    .required("Password es requerido")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "La contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un carácter especial"
    ),
    rol: Yup.string().required("Debe seleccionar un rol"),
    fullname: Yup.string().required("El Nombre es requerido")
})

export const validationSchemaLogin=
Yup.object({
  email: Yup.string()
      .email('Email no válido')
      .required("Email es requerido"),
  password: Yup.string()
  .required("Password es requerido")
})

export const validationSchemaPassword=
Yup.object({
  email: Yup.string()
      .email("Email no válido")
      .required("Email es requerido")
})

export const validationSchemaConfirmPassword = 
Yup.object({
  password: Yup.string()
  .required("Contraseña es requerido")
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
    "La contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un carácter especial"
  ),
  repeatpassword:Yup.string()
  .required("Confirma tu contraseña")
  .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
})
