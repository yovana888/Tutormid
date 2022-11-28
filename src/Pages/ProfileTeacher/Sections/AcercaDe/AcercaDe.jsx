import React from 'react'
import { AcercaBody } from './Styles'

export default function AcercaDe() {
  return (
    <AcercaBody className='container'>
        <div className='detailSection row'>
            <div className='col-md-3'>
                <img className='img-fluid' src="./Ellipse 30.svg" alt="" />
            </div>
            <div className='col-md-9'>
                <div className='name'>Lisa Sotelo Flores</div>
                <div className='materia'>Matemáticas  General </div>
                <div className='level'>Nivel: Primara, Secundaria</div>
            </div>
        </div>
        <div>
            <h4>Acerca del Profesor</h4>
            <p>Tengo más de 5 años de experiencia dando clases de matemáticas, y me he dado cuenta de que lo más importante es la confianza del alumno con el profesor/tutor, de ahí que lo primero que hago es preguntarle al alumno todas las dudas que pueda tener. , luego les sigo explicando ejercicios relacionados con el tema y luego, cuando están seguros les dejo ejercicios para que lo hagan, y por supuesto los corrijo. 

            Reserva una clase de prueba conmigo y podrás ver cómo se ve una clase mía y cuánto te ayudaría a alcanzar tus objetivos.
            <span><a href="">Ver Menos</a></span>
            </p>
        </div>
    </AcercaBody>
  )
}
