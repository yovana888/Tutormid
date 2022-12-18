import React, {useState} from 'react'
import { BodyComents } from './Styles';
import { AiFillStar } from 'react-icons/ai';
import Button from '../../../../Components/Elements/Button/Button';

export default function Coments() {
    // ------------------------------Acciones para Abrir Modal Add Commet------------------------------

    const [showModalComentary, setshowModalComentary] = useState(false);
    const toggleModalComentary = () => {
      setshowModalComentary(!showModalComentary)
    }
  return (
    <BodyComents>
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

      <div className='d-flex justify-content-center'>
        <Button className='mt-3 ' text="Publicar un comentario" color="outline" /> 
      </div> 
    </BodyComents>

    
  )
}


function ComentContent(props) {
  return (
    <div className='section'>

        <div className='image'>
          <img src={props.img}  alt="" />
        </div>

          <div className='content '>
            <div className='nameStar'>
              <span className='name'>{props.name}</span>
              <span className='calification'><AiFillStar value={{size: '1.3rem', style:{paddingBottom: "4px" }}} color= "#FFC538"/> {props.stars}</span>
            </div>

            <div className='date'>
              <span>{props.date}</span>
            </div>

            <div className='text'>
              <p>{props.text}</p>
            </div>
          </div>
    </div>
  )
}