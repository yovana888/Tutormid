import React, {useState} from 'react'
import NewModal from "../../Components/Groups/NewModal/NewModal";
import Form from 'react-bootstrap/Form';
import Button from "../../Components/Elements/Button/Button";
// import { NewSelect } from "../../Components/Elements/NewSelect/NewSelect";
import TabsReserva2 from './TabsReserva2';



const TabsReserva1 = ({isOpen, toggle}) => {

  const [showModalReserve2, setshowModalReserve2] = useState(false);

  const toggleModalReserve2 = () => {
    setshowModalReserve2(!showModalReserve2)
  } 

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
      fontSize: '16px'
      }}>


        <option> Secundaria </option>
        <option> Instituto </option>
        <option> Universidad </option>        
    </Form.Select>

    {/* <NewSelect
            options='secundaria'
            placeholder="Seleccione su Rol"
            value='secundaria'
            name='rol'
          /> */}

      
    </>


    <div className="d-flex justify-content-start mt-3 "> 

          <Button
              text={'Cancelar'}
              size="lg-size"
              className="mt-4 mx-3"
            />

          <Button
              text={'Siguiente'}
              size="lg-size"
              className="mt-4 mx-3"
              type="submit"
              onClick={() => {toggleModalReserve2() }}
            />

    </div>   

     
    <TabsReserva2 toggle={toggleModalReserve2 } isOpen={showModalReserve2}/>
    </NewModal>
  )
}

export default TabsReserva1

