import React from 'react'
import Button from '../../Elements/Button/Button'
import {BodyCard} from './Styles'
import { AiFillStar } from 'react-icons/ai';
import { BsChatText } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons'



export default function AdsCards() {
  return (
    <div className='container '>
          <AdsCardContent
           img='./Ellipse 30.svg'
           name='Lisa Sotelo Flores'
           materia='Matemáticas'
           description='Estudiante de ingeniería :) Con experiencia enseñando a estudiantes de colegio y/o preuniversitarios Clases virtuales de matemática (aritmética, álgebra, geometría, trigonometría)...'
           calification='5.0'
           comments='22'
           price='$15.00 /  50 min'/>
           

          <AdsCardContent
           img='./Ellipse 31.svg'
           name='Juan Soto Ramirez'
           materia='Matemáticas'
           description='Estudiante de ingeniería :) Con experiencia enseñando a estudiantes de colegio y/o preuniversitarios Clases virtuales de matemática (aritmética, álgebra, geometría, trigonometría)...'
           calification='5.0'
           comments='22'
           price='$15.00 / 1 hora'/>

          <AdsCardContent
           img='./Ellipse 32.svg'
           name='Lorena Salas'
           materia='Matemáticas'
           description='Estudiante de ingeniería :) Con experiencia enseñando a estudiantes de colegio y/o preuniversitarios Clases virtuales de matemática (aritmética, álgebra, geometría, trigonometría)...'
           calification='5.0'
           comments='22'
           price='$15.00 / 30 min'/>

          <AdsCardContent
           img='./Ellipse 33.svg'
           name='Javier Vera J.'
           materia='Matemáticas'
           description='Estudiante de ingeniería :) Con experiencia enseñando a estudiantes de colegio y/o preuniversitarios Clases virtuales de matemática (aritmética, álgebra, geometría, trigonometría)...'
           calification='5.0'
           comments='22'
           price='$15.00 /  50 min'/>

    </div>

  )
}

function AdsCardContent(props) {
  return(
    <BodyCard className='card-content row'>

      <section className='col-md-2 col-sm-12'>
            <img className='img-fluid' src={props.img} alt="" />
        </section>

        <section className='col-md-7 col-sm-12 text-area'>
            <h4 className='name'>{props.name}</h4>
            <h5  className='materia' >{props.materia}</h5>
            <p className='description'>{props.description}</p>
        </section>

        <section className='col-md-2 col-sm-12 '>

          <div className='d-flex icons-section'>
            <IconContext.Provider value={{size: '1.3rem', style:{paddingBottom: "4px" } }}>
              <p><AiFillStar color= "#FFC538" /> {props.calification}</p>

              <p><BsChatText color= "#4D7DF9" /> {props.comments}</p>

              <p><BsHeart color= "#FE374C"/></p>
            </IconContext.Provider>
          </div>

          <div className='hours'>
            <p><AiOutlineClockCircle color= "#5F2ECC" style={{paddingBottom: "4px" }} size='1.4rem'/>{props.price}</p>
          </div>

          <div>
            <Button text='Reservar Clase' className='container-fluid'/>
          </div>

        </section>

    </BodyCard>
  )
}
