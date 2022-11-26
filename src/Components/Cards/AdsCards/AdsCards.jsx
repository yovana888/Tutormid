import React from 'react'
import Button from '../../Elements/Button/Button'
import {BodyCard} from './Styles'
import { AiFillStar } from 'react-icons/ai';
import { BsChatText } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';



export default function AdsCards() {
  return (
    <div className='container '>
          <AdsCardContent/>
          <AdsCardContent/>
          <AdsCardContent/>
          <AdsCardContent/>
          <AdsCardContent/>
    </div>

  )
}

function AdsCardContent(props) {
  return(
    <BodyCard className='card-content row'>
      <section className='col-md-2 col-sm-12'>
            <img className='img-fluid' src="./Ellipse 30.svg" alt="" />
        </section>

        <section className='col-md-7 col-sm-12 text-area'>
            <h2 className='name'>Lisa Sotelo Flores</h2>
            <h4  className='materia' >Matemáticas</h4>
            <p className='description'>Estudiante de ingeniería :) Con experiencia enseñando a estudiantes de colegio y/o preuniversitarios Clases virtuales de matemática (aritmética, álgebra, geometría, trigonometría)...
            </p>
        </section>

        <section className='col-md-2 col-sm-12 '>
          <div className='d-flex icons-section'>
            <p><AiFillStar color= "#FFC538" style={{paddingBottom: "4px" }} size='1.4rem'/>5.0</p>
            <p><BsChatText color= "#4D7DF9" style={{paddingBottom: "4px" }} size='1.4rem'/>22</p>
            <p><BsHeart color= "#FE374C" style={{paddingBottom: "4px" }} size='1.4rem'/></p>
          </div>

          <div className='hours'>
            <p><AiOutlineClockCircle color= "#5F2ECC" style={{paddingBottom: "4px" }} size='1.4rem'/>$15.00 / 50 min</p>
          </div>

          <div>
            <Button text='Reservar'/>
          </div>
        </section>
    </BodyCard>
  )
}
