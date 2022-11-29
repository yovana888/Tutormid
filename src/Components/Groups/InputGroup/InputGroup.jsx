import React, { useState } from 'react'
import Button from '../../Elements/Button/Button';
import { Select } from '../../Elements/Select/Select';
import { ContainerInline } from './Style'
export default function NewInputGroup() {
    
    const optionList = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
        { value: "white", label: "White" },
        { value: "orange", label: "Orange" },
        { value: "purple", label: "Purple" },
        { value: "prueba", label: "Prueba" },
        { value: "purple2", label: "purple2" }
    ];
    const [selectedOption1, setSelectedOption1] = useState(null);

    function handleSelect1(option) {
        setSelectedOption1(option);
    }

    return (
        <ContainerInline>
            <Select
                options={optionList}
                placeholder="¿Qué te interesa aprender?"
                value={selectedOption1}
                onChange={handleSelect1}
                isSearchable
                isInputSearch
            />
            <Button text="Buscar" size='md-size' />
        </ContainerInline>
    )
}