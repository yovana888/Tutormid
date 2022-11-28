export function validateEmail(email: string): string {
    if(email.length === 0) {
        return "El email es requerido";
    }
    if ( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
        return "";
    }
    return "Formato de email invalido";
}

function validatePassword(password:string): string{
    if(password.length === 0) {
        return "El Password es requerido";
    }
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/i.test(password)){
        return "";
    }
    return "La contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un carácter especial";
}

function validateRol(option:any): string{
    if(option==null){
        return "El Rol es un campo obligatorio";
    }

    return "";
}

export function validate(value:string, type:string){
    switch (type) {
        case "email":
            return validateEmail(value);
        case "password":
            return validatePassword(value);
        case "rol":
            return validateRol(value)
        default:
            return "";
    }
}

