import React from 'react'
import NewModal from "../../Components/Groups/NewModal/NewModal";
import TextField from "../../Components/Elements/TextField/TextField";
import Form from 'react-bootstrap/Form';
import { NewSelect } from "../../Components/Elements/NewSelect/NewSelect";



const TabsReserva1 = ({isOpen, toggle}) => {
  return (

    <NewModal isOpen={isOpen} toggle={toggle} title={"Planifica tu clase de Matemáticas con Lisa"}> 
    <>
    <p> <b>¿Qué quieres aprender?</b>  </p>
    <textarea placeholder='Describe lo que quieres aprender...' 
          style={{
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            padding: 10,
            margin: "20px 0",
            minHeight: 100,
            width: 410
          }}
          className='mt-0'
        />

      
    <p> <b>Selecciona el nivel de estudios</b>  </p>

    <Form.Select size="lg" 
    style={{
      height:'45px',
      width: '410px',
      borderRadius: '8px', 
      }}>


        <option> Secundaria </option>
        <option> Secundaria </option>
        <option> Secundaria </option>        
    </Form.Select>

    <NewSelect
            options='secundaria'
            placeholder="Seleccione su Rol"
            value='secundaria'
            name='rol'
          />

      
    </>

    </NewModal>
  )
}

export default TabsReserva1

