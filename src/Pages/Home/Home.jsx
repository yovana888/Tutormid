import React from 'react'
import AdsTeachers from '../Home/Sections/AdsTeachers/AdsTeachers'
import Banner from './Sections/Banner/Banner'
import Beneficios from './Sections/Beneficios/Beneficios'
import Steps from './Sections/Steps/Steps'


export default function Home() {
  return (
    <>
    <section>
        <Banner/>
        <Steps/>
        <AdsTeachers/>
        <Beneficios/>
    </section>
    </>
  )
}
