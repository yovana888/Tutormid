import React from 'react'
import { ProfileTbody, Metodo, Horario, Estudios,ComentsSection } from './Styles'
import AcercaDe from './Sections/AcercaDe/AcercaDe'
import VideoCard from '../../Components/Cards/VideoCard/VideoCard'
import Coments from './Sections/Coments/Coments'

export default function ProfileTeacher() {
  return (
    <ProfileTbody>
      <div className='container'>
        <div className='row flex-row-reverse'>

          <div className='col-12 col-md-3 mb-3'>
           <VideoCard/>
          </div>

          <div className='col-12 col-md-9'>
            <AcercaDe/>

            <Metodo className='mt-3 mb-3'>
            <h4>Mis clases y método de enseñanza</h4>
            <p>La metodología del trabajo para comprender este mundo, consiste en explicarla teoría con ejemplos de la vida cotidiana, ya que la Matemática se manifiestaen cualquier parte del mundo de distintas formas:paisajes,pinturas en lienzo,en lasplantas,en animales,en obras artísticas,etc.</p>
          </Metodo>

          <Horario className='mb-3'>
            <img src="/horario.png" alt="" className="img-fluid" />
          </Horario>

          <Estudios className='mb-3'>
            <h4>Estudios</h4>
            <p> {">"} Magister en Ciencias Aplicadas - Universidad de Lima</p>
            <p> {">"} Titulada en Ciencias de la Educación - Universidad Cesar Vallejo</p>
          </Estudios>

          <ComentsSection className=''>
            <Coments/>
          </ComentsSection>
            
          </div>

          
          
        </div>
      </div>
      
    </ProfileTbody>
  )
}
