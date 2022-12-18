import React from 'react'
import NewModal from "../../Components/Groups/NewModal/NewModal";
import TextField from "../../Components/Elements/TextField/TextField";
import { TfiEmail, TfiUser } from "react-icons/tfi";
import Button from "../../Components/Elements/Button/Button";






const TabsReserva2 = ({isOpen, toggle}) => {
  return (

    <NewModal isOpen={isOpen} toggle={toggle} title={"Planifica tu clase de Matemáticas con Lisa"}> 
    <>
      <p> <b>¿La clase es para ti?</b> </p>

    <div className="d-flex justify-content-justify">

      <div className="form-check mx-1" >
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label" for="flexRadioDefault1">
            Si
          </label>
      </div>

      <div className="form-check mx-5">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
          <label className="form-check-label" for="flexRadioDefault2">
            No, es para un familiar o amigo
          </label>
      </div>
    </div>

    <TextField
              icon={<TfiUser />}
            edge="end"
            label="Nombre y Apellidos"
            type="text"
            placeholder="Ingresa tu nombre"
            width100={true}
            name='fullname'
            classes='mt-4 mb-4'
          />


        <TextField
            icon={<TfiEmail />}
          edge="end"
          label="Email"
          type="text"
          placeholder="email@gmail.com"
          width100={true}
          name='Email'
          classes='mt-4 mb-4'
        />

        <TextField
            edge="end"
            label="Celular"
            type="text"
            placeholder="Ingresa tu celular"
            width100={true}
            name="nombre"
            classes='mb-4 mt-4 '
          />


      <div className="d-flex justify-content-start mt-3 "> 

        <Button
            text={'Atras'}
            size="lg-size"
            className="mt-4 mx-3"
          />

        <Button
            text={'Enviar solicitud'}
            size="lg-size"
            className="mt-4 mx-3"
            type="submit"
            onClick={() => {toggleModalReserve2() }}
          />

  </div>   


      
      

      
    </>

    </NewModal>
  )
}

export default TabsReserva2



// import styled from 'styled-components';
// import { colors } from '../../../Styles/colors'; 
// import {Link} from 'react-router-dom';

 // aqui creamos la const con el element html y se le da estilos 
 // para luego usarla en la otra web. 

// export const ContainerForm = styled.form`
//     display:flex;
//     flex-direction:column;
//     gap:15px;
// `

// export const NavbarContainer = styled.div`
//   width: 100%;
//   height: 80%;
//   position: sticky;
//   top: 0;
//   z-index: 99;
//   border-bottom: 1px solid ${colors.lineColor};
//   background:white;
//   padding:20px 3.3rem;
// `

// export const IconLogo = styled(Link)`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   img{
//     margin-top: -22px;
//     @media screen and (max-width: 960px){
//       margin-top: -15px;
//       width: 100px;
//     }
//   }
//   `

// DONDE LO USAMOS LO LLAMAMOS ASIIIIIII   
// import { ContainerForm } from "./Style";