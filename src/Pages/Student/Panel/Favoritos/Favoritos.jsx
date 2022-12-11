import React from 'react'
import { useState } from 'react';
import {FavBody, StarIcon, BookContent} from './Styles'


export default function Favoritos() {

  const [full, setFull] = useState(false);
  function handleFull(isLleno) { setFull(isLleno) }

  if (!full) {
    return (

      <FavBody>
        <div className='contenedor'>
          <h4 className='title'>Mis Favoritos</h4>
          
          <div className='full-box'>
            <p><BookContent/> Lisa Sotelo</p>
            <p><BookContent/> Camila Flores</p>
            <p><BookContent/> Jhonatan Jimenez</p>
          </div>

        </div>
      </FavBody>
      )
      
  }
  else {
    return (

      <FavBody>
        <div className='contenedor'>
          <h4 className='title'>Mis Favoritos</h4>

        <div className='empty-box'>
            <span><StarIcon/></span>
            <span>Aún no tienes favoritos</span>
          </div>
        </div>
        </FavBody>
      )
      
  }
 
}
            

            
        

