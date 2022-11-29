import React, { ChangeEvent, useState } from 'react';
import { ContainerTextField, Input, ContainerInput,Label } from './Style';


/*
    ===================COMO USAR ICONOS===================
    Si quiere agregar un icono, es obligatorio tambien enviar la propiedad "edge=*"

    <TextField
        icon={<Heart />}
        edge="end"
        label="Nombre"
    />
*/

const TextField = ({ classes="", icon=null, edge=null, placeholder="", label, type="text", name, onChange, isReadOnly=false, width100=false,value='' })=> {

    const [isFocus, setIsFocus] = useState(false);

    return <ContainerTextField
        className={classes}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
    >

        { label ? <Label>{label}</Label> : null }

        <ContainerInput
            isFocus={isFocus}
            edge={edge}
            style={{width:width100?'100%':'30ch'}}
        >
            { edge === 'start' ? icon : null }

            <Input
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={onChange}
                readOnly={isReadOnly}
            />

            { edge === 'end' ? icon : null }
        </ContainerInput>
    </ContainerTextField>
}

export default TextField;