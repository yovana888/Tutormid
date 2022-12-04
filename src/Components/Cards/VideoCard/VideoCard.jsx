import React from 'react'
import Button from '../../Elements/Button/Button'
import { CardStyle } from './Styles'
import { AiFillStar } from 'react-icons/ai';
import { BsChatText } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { VscBook } from 'react-icons/vsc';
import { IconContext } from 'react-icons'
import { BsFillShareFill } from 'react-icons/bs';
import FavButton from '../../Elements/FavButton/FavButton';


export default function VideoCard() {
  return (
  
    <CardStyle className="">
     
        <img className='CardImage p-0' src='/video_img.svg' alt=""  />
      
      <div className="CardBody p-0">
        <div className='iconSection' >
          <IconContext.Provider value={{size: '1.3rem', style:{paddingBottom: "4px" } }}>
            <p><AiFillStar color= "#FFC538" />4.6</p>

            <p><BsChatText color= "#4D7DF9" /> 22</p>

            <p><FavButton color= "#FE374C"/></p>
          </IconContext.Provider>
        </div>
        <div className='hoursShare'>
          <p><VscBook color= "#5F2ECC" style={{paddingBottom: "4px" }} size='1.4rem'/> $15.00 / 50 min</p>
          <span><BsFillShareFill color= "#4D7DF9"/></span>
        </div>
        <div className='btn-area'>
          <Button text='Reservar Clase' className='container-fluid'/>
        </div>
      </div>
    </CardStyle>
  )
}
