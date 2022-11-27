import React from 'react'
import { TeacherSection }  from './Style'
import TeacherCard from '../../../../Components/Cards/teacherCards/TeacherCard'
import Button from '../../../../Components/Elements/Button/Button'
import Text from '../../../../Components/Elements/Text/Text';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function AdsTeachers() {
  return (
      <TeacherSection>
            <Text name='Profesores profesionales y calificados' className='text-center'/>
            <Text name='Más del 85% de los alumnos han dado' className='text-center' name2='una calificación de 5 estrellas' typeText='subtitle'/>
            <TeacherCard/>
            <div className='d-flex justify-content-center'>
               <Link to={"ads"}> <Button text='Ver más profesores' type='button' color='outline'  icon={<IoIosArrowForward/>} /> </Link>
            </div>
      </TeacherSection>
         
  )
}
