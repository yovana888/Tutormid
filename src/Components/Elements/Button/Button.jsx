import React from "react";
import { ButtonElement } from "./Style";

function Button({ text, size = "default-size", color = "primary", type="button", disabled, onClick, icon, className, style, isGoogle=false, responsiveRight=false }) {
    //la otra opcion es small-size
    if (size !== "default-size")
        return (
            <ButtonElement onClick={onClick} type={type} className={`${className} ${size} ${color} ${responsiveRight?'responsive-right':''}` } style={style} disabled={disabled}>
              {isGoogle && (<img src="/google.png" className="google"/>)} {text} {icon}
            </ButtonElement>
        );
    else
        return (
            <ButtonElement onClick={onClick} type={type} className={`default-size ${className} ${color}`} style={style} disabled={disabled}>
                {isGoogle && (<img src="/google.png"  className="google"/>)} {text}  {icon}
            </ButtonElement>
        );
}

export default Button;