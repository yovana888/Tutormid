import React from 'react'
import { ProfileTbody, Metodo, AcercaDeSection, Horario, Estudios,ComentsSection } from './Styles'
import AcercaDe from './Sections/AcercaDe/AcercaDe'
import VideoCard from '../../Components/Cards/VideoCard/VideoCard'
import Coments from './Sections/Coments/Coments'

export default function ProfileTeacher() {
  return (
    <ProfileTbody>
      <AcercaDeSection>
        <AcercaDe/> 
        <VideoCard/>
      </AcercaDeSection>

      <Metodo className=''>
        <h4>Mis clases y método de enseñanza</h4>
        <p>La metodología del trabajo para comprender este mundo, consiste en explicarla teoría con ejemplos de la vida cotidiana, ya que la Matemática se manifiestaen cualquier parte del mundo de distintas formas:paisajes,pinturas en lienzo,en lasplantas,en animales,en obras artísticas,etc.</p>
      </Metodo>

      <Horario>
        <img src="/horario.png" alt="" />
      </Horario>

      <Estudios>
        <h4>Estudios</h4>
        <p> {">"} Magister en Ciencias Aplicadas - Universidad de Lima</p>
        <p> {">"} Titulada en Ciencias de la Educación - Universidad Cesar Vallejo</p>
      </Estudios>

      <ComentsSection>
        <Coments/>
      </ComentsSection>
    </ProfileTbody>
  )
}
