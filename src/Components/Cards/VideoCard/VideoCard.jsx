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

export default function VideoCard({data}) {
  return (
  
    <CardStyle className="">
      <img className='CardImage p-0' src='/video.png' alt=""/>
      <div className="CardBody p-0">
        <div className='iconSection' >
          <IconContext.Provider value={{size: '1.3rem', style:{paddingBottom: "4px" } }}>
            <p><AiFillStar color= "#FFC538" />{data.users_rol.score}</p>

            <p><BsChatText color= "#4D7DF9" /> {data.users_rol.comments}</p>

            <p><FavButton color= "#FE374C"/></p>
          </IconContext.Provider>
        </div>
        <div className='hoursShare'>
          <p><VscBook color= "#5F2ECC" style={{paddingBottom: "4px" }} size='1.4rem'/> {`  S/ ${data.price} / ${data.time} ${data.type_time}`}</p>
          <span><BsFillShareFill color= "#4D7DF9"/></span>
        </div>
        <div className='btn-area'>
          <Button text='Reservar Clase' className='container-fluid'/>
        </div>
      </div>
    </CardStyle>
  )
}
