import React from 'react'
import ProfileCard from '../../../Components/Cards/ProfileCard/ProfileCard'
import {PanelBody, Welcome, Solicitudes} from './Styles'
import Favoritos from '../Panel/Favoritos/Favoritos'
import Button from '../../../Components/Elements/Button/Button'
import { Link } from 'react-router-dom';

export default function PanelS() {


  let solicitudes = [
    {
      fecha: 'Hoy',
      teachers: [
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Pendiente",
          style: "pending"
        }
      ] 
    },
    {
      fecha: '10-12-22',
      teachers: [
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Aceptado",
          style: "acept"
        },
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Cancelado",
          style: "cancel"
        }
      ]
    },
    {
      fecha: '10-10-22',
      teachers: [
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Rechazado",
          style: "refused"
        }
      ]
    }
  ]

  return (

  
  
    <PanelBody>
      <div className='container'>
        <div className='row '>
          <div className='col-md-5'>
            <ProfileCard
            img='/Ellipse 27.svg'
            name='Amelia Perez Rojas'
            email='amelia@gmail.com'
            number='975635061'
            isStudent={true}/>
            <Favoritos/>
          </div>
 {/* BIENVENID@ CARD--------------------------------------------- */}
          <div className='col-md-7'>
            <Welcome>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-7 left-side'>
                      <h4>👋  Bienvenid@ Amelia</h4>
                      <p>Recuerda que puedes buscar a tu profesor ideal con los filtros que selecciones.</p>
                      <Link to={"/ads"}><Button  text="Ver Profesores" color="outline" /></Link>
                    </div>
                    <div className='col-md-5 right-img'>
                      <img className='' src="/image 58.svg" alt="" />
                    </div>
                  </div>
                </div>
            </Welcome>

{/* -------------SOLICITUDES------------------------------------- */}
            <Solicitudes>
              <h4>
              Mis solicitudes de clases
              </h4>
              {!solicitudes.length ? <>
                <div className='empty-box'>
                  <img src="/image 61.svg" alt="" />
                  <p>Aquí aparecerán tus solicitudes de clases</p>
                </div>
              </>
              :
              <>
                <div className='full-box'>
                <div className='list'>

                  {solicitudes.map( e => 
                  (<>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span className='fecha'>{e.fecha}</span> <Divider secondaryColor="grey" 
                      ></Divider>
                    </div>
                    {
                      e.teachers.map( tch => (
                      <ul className='list-unstyled d-flex justify-content-between'>
                        <li>{ tch.name }</li> 
                        <li>{ tch.materia }</li> 
                        <li>
                          <span className={ tch.style }>
                            { tch.status }
                          </span>
                        </li> 
                        <li></li>
                      </ul>
                      ))
                    }
                    
                  </>
                  )
                    )}
                  
                </div>

                
              </div>
              </>
              }
              

              
            </Solicitudes>
          </div>
        </div>
      </div>
    </PanelBody>
  
  )
}


function Divider(props) {
  return (
    <hr
      style={{
        backgroundColor: props.secondaryColor,
        height: '1px',
        width: '84%',
      }}
    />
  );
}