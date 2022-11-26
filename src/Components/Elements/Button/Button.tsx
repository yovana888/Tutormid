import React from "react";
import { ButtonElement } from "./Style";

interface Props {
    text: string;
    size?: string;
    color?: string;
    disabled?: boolean;
    onClick?: any;
    icon?: JSX.Element | null;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    style?: React.CSSProperties | undefined,
    isGoogle?:boolean;
    responsiveRight?:boolean
}

//* por defecto: default-size y es primary(({prop1, prop2....}))

function Button({ text, size = "default-size", color = "primary", type, disabled, onClick, icon, className, style, isGoogle=false, responsiveRight=false }: Props) {
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