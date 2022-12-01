import React from 'react'
import { BodyComents } from './Styles'

export default function Coments() {
  return (
    <div>
      <h4>Comentarios</h4>

      <ComentContent
      img='/Ellipse 28.svg'
      name='Beth'
      stars='5.0'
      date='Octubre 30, 2022'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      '/>

      <ComentContent
      img='/Ellipse 28.svg'
      name='Alberto'
      stars='5.0'
      date='Octubre 28, 2022'
      text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
      '/>
    </div>
  )
}


function ComentContent(props) {
  return (
    <BodyComents className='BodyComents'>
      <div className='image'>
          <img src={props.img}  alt="" />
      </div>
        
      <div className='content container'>
        <div className='nameStar'>
          <span className='name'>{props.name}</span>
          <span className='calification'>{props.stars}</span>
        </div>

        <div className='date'>
          <span>{props.date}</span>
        </div>

        <div className='text'>
          <p>{props.text}</p>
        </div>     
      </div>
    </BodyComents>
  )
}