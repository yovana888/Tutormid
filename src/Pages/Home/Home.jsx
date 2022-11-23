import React from 'react'
import AdsTeachers from '../Home/Sections/AdsTeachers/AdsTeachers'
import Banner from './Sections/Banner/Banner'
import Beneficios from './Sections/Beneficios/Beneficios'



export default function Home() {
  return (
    <>
    <section>
        <Banner/>       
        <AdsTeachers/>
        <Beneficios/>
    </section>
    </>
  )
}
