import React from 'react'
import TeacherCard from '../../Components/Cards/teacherCards/TeacherCard'
import { TeacherSection } from './Styles'
import Banner from './Sections/Banner/Banner'


export default function Home() {
  return (
    <>
        <Banner/>
        <section className='container'>
         <TeacherSection>
            <h3 className='text-center title-prof'>Profesores profesionales y calificados</h3>
            <p className='text-center text-prof'>Más del 85% de los alumnos han dado una <br/> calificación de 5 estrellas</p>

            <TeacherCard/>
         </TeacherSection>
        </section>
    </>
  )
}
