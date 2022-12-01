import React from 'react';
import { AcercaBody } from './Styles';
import { VscBook } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function AcercaDe() {
  return (
    <AcercaBody className='container'>
        <div className='detailSection '>
            <div className=''>
                <img className='img-fluid image' src="./Ellipse 30.svg" alt="" />
            </div>
            <div className='details'>
                <IconContext.Provider value={{size: '1.3rem', style:{paddingBottom: "4px" } }}>
                <h4 className='name'>Lisa Sotelo Flores</h4>
                <h5 className='materia'><VscBook/> Matemáticas  General </h5>
                <h5 className='level'><BsFillPersonLinesFill/> Nivel: Primara, Secundaria</h5>
                </IconContext.Provider>
            </div>
        </div>
        <div>
            <h4 className='acerca'>Acerca del Profesor</h4>
            <p className='description'>Tengo más de 5 años de experiencia dando clases de matemáticas, y me he dado cuenta de que lo más importante es la confianza del alumno con el profesor/tutor, de ahí que lo primero que hago es preguntarle al alumno todas las dudas que pueda tener. , luego les sigo explicando ejercicios relacionados con el tema y luego, cuando están seguros les dejo ejercicios para que lo hagan, y por supuesto los corrijo. 

            Reserva una clase de prueba conmigo y podrás ver cómo se ve una clase mía y cuánto te ayudaría a alcanzar tus objetivos. 
            <br/>
            <br/>
            <span><a href="">Ver Menos</a></span>
            </p>
        </div>
    </AcercaBody>
  )
}
