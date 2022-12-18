import React, { useState } from 'react'
import Button from '../../Elements/Button/Button'
import {BodyCard} from './Styles'
import { AiFillStar } from 'react-icons/ai';
import { BsChatText } from 'react-icons/bs';

import { AiOutlineClockCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons'
import FavButton from '../../Elements/FavButton/FavButton';
import { useNavigate } from "react-router-dom";

export default function AdsCards({item}) {
  const navigate=useNavigate()
  const goDocenteProfile=(idDocente)=>{
  navigate('/profileteacher/'+idDocente)
}
  return (
    <BodyCard className='card-content row'  onClick={()=>{goDocenteProfile(item.users_rol.id)}}>

    <section className='col-md-2 col-sm-12'>
          <img className='img-fluid' style={{borderRadius:'50%'}} src={item.users_rol.photo_url} alt="" />
      </section>

      <section className='col-md-7 col-sm-12 text-area'>
          <h4 className='name'>{item.users_rol.full_name}</h4>
          <h5  className='materia' >{item.course.name}</h5>
          <p className='description'>{item.users_rol.about_me}</p>
      </section>

      <section className='col-md-2 col-sm-12 '>

        <div className='d-flex icons-section'>
          <IconContext.Provider value={{size: '1.3rem', style:{paddingBottom: "4px" } }}>
            <p><AiFillStar color= "#FFC538" /> {item.users_rol.score}</p>

            <p><BsChatText color= "#4D7DF9" /> {item.users_rol.comments}</p>

            <p><FavButton /></p>

          </IconContext.Provider>
        </div>

        <div className='hours'>
          <p><AiOutlineClockCircle color= "#5F2ECC" style={{paddingBottom: "4px" }} size='1.4rem'/>
          {`  S/ ${item.price} / ${item.time} ${item.type_time}`}</p>
        </div>

        <div>
          <Button text='Reservar Clase' className='container-fluid'/>
        </div>

      </section>

  </BodyCard>

  )
}

