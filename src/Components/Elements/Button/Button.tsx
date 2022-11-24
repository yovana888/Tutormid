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
    style?: React.CSSProperties | undefined
}

//* por defecto: default-size y es primary(({prop1, prop2....}))

function Button({ text, size = "default-size", color = "primary", type, disabled, onClick, icon, className, style }: Props) {
   

//style={{marginLeft: ".6rem"}}
    // caso de un size específico se lo paso por classname, completar estilado en ./styles.ts
    if (size !== "default-size")
        return (
            <ButtonElement onClick={onClick} type={type} className={`${className} ${size} ${color}`} style={style} disabled={disabled}>
                 {text} {icon}
            </ButtonElement>
        );
    else
        return (
            <ButtonElement onClick={onClick} type={type} className={`default-size ${className} ${color}`} style={style} disabled={disabled}>
                {text}  {icon}
            </ButtonElement>
        );
}

export default Button;