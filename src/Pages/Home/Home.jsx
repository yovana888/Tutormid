import React from 'react'
import AdsTeachers from '../Home/Sections/AdsTeachers/AdsTeachers'
import Banner from './Sections/Banner/Banner'
import Beneficios from './Sections/Beneficios/Beneficios'
import Steps from './Sections/Steps/Steps'
import Reviews from './Sections/Reviews/Reviews'

export default function Home() {  
  return (
    <>
        <Banner/>
        <Steps/>
        <AdsTeachers/>
        <Beneficios/>
        <Reviews/>
        
    </>
  )
}
