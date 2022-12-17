import React from 'react'
import ProfileCard from '../../../Components/Cards/ProfileCard/ProfileCard'
import {PanelBody, Welcome, Solicitudes} from './Styles'
import Favoritos from '../Panel/Favoritos/Favoritos'
import Button from '../../../Components/Elements/Button/Button'
import { Link } from 'react-router-dom';

export default function PanelS() {


  let solicitudes = [
    {
      name: "Lisa Sotelo Quispe",
      materia: "Matematica Financiera",
      status: "Pendiente",
      style: "pending"
    },
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
    },
    {
      name: "Lisa Sotelo Quispe",
      materia: "Matematica Financiera",
      status: "Rechazado",
      style: "refused"
    }
  ]

  return (

  
  
    <PanelBody>
      <div className='container'>
        <div className='row '>
          <div className='col-md-5'>
            <ProfileCard
            banner
            isCalendar={true}/>
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
                  

                  <div className='name-list'>
                    {
                      solicitudes.map( (e) => (
                        <p>{">"} {e.name}</p>
                      ))
                    }
                  </div>
                  
                  <div>
                  {
                      solicitudes.map( (e) => (
                        <p>{e.materia}</p>
                      ))
                    }
                  </div>
                  <div className='status'>
                  {
                      solicitudes.map( (e) => (
                        <p className={e.style}>{e.status}</p>
                      ))
                    }
                  </div>
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
