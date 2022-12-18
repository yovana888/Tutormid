import React from 'react';
import { AcercaBody } from './Styles';
import { VscBook } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineBook } from "react-icons/ai";
export default function AcercaDe({data}) {
  return (
    <AcercaBody className='container-fluid'>
        <div className='detailSection row'>
            <div className='col-12 col-md-4 col-lg-3 text-center'>
                <img className='image' src={data.users_rol.photo_url} alt="" />
            </div>
            <div className='details col-12 col-md-8 col-lg-9'>
                <IconContext.Provider value={{size: '1.3rem', style:{paddingBottom: "4px" } }}>
                <h4 className='name'>{data.users_rol.full_name}</h4>
                <h5 className='materia'><VscBook/> {data.course.name}</h5>
                <h5 className='level'><BsFillPersonLinesFill/> Nivel: {data.nivel.name}</h5>
                <h5 className='text-muted'><AiOutlineBook/> Dirigido a : {data.type_study.name}</h5>
                </IconContext.Provider>
            </div>
        </div>
        <div className='mt-5'>
            <h4 className='acerca'>Acerca del Profesor</h4>
            <p className='description'>Tengo más de 5 años de experiencia dando clases de matemáticas, y me he dado cuenta de que lo más importante es la confianza del alumno con el profesor/tutor, de ahí que lo primero que hago es preguntarle al alumno todas las dudas que pueda tener. , luego les sigo explicando ejercicios relacionados con el tema y luego, cuando están seguros les dejo ejercicios para que lo hagan, y por supuesto los corrijo. 

            Reserva una clase de prueba conmigo y podrás ver cómo se ve una clase mía y cuánto te ayudaría a alcanzar tus objetivos. 
            <br/>
            </p>
        </div>
    </AcercaBody>
  )
}
