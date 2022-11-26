import React from 'react'
import  {TeacherSection}  from './Style'
import TeacherCard from '../../../../Components/Cards/teacherCards/TeacherCard'
import Button from '../../../../Components/Elements/Button/Button'
import { IoIosArrowDropright } from 'react-icons/io';


export default function AdsTeachers() {
  return (
      <TeacherSection>
            <h3 className='text-center title-prof'>Profesores profesionales y calificados</h3>
            <p className='text-center text-prof'>Más del 85% de los alumnos han dado una <br/> calificación de 5 estrellas</p>
            <TeacherCard/>
            <div className='d-flex justify-content-center pb-5'>
            <Button text='Ver más profesores    ' type='button' color='outline'  icon={<IoIosArrowDropright/>} />
            </div>
         </TeacherSection>
         
  )
}
