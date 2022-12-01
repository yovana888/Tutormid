import React from 'react'
import Button from '../../Elements/Button/Button'
import { CardStyle, ContainerCard } from './Styles'
import { AiFillStar } from 'react-icons/ai';
import { BsChatText } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { VscBook } from 'react-icons/vsc';
import { IconContext } from 'react-icons'
import { BsFillShareFill } from 'react-icons/bs';


export default function VideoCard() {
  return (
    <ContainerCard>
      <CardStyle className="card">
        <img className='CardImage' src='/video_img.svg' alt=""  />
        <div className="CardBody">
          <div className='iconSection' >
            <IconContext.Provider value={{size: '1.3rem', style:{paddingBottom: "4px" } }}>
              <p><AiFillStar color= "#FFC538" />4.6</p>

              <p><BsChatText color= "#4D7DF9" /> 22</p>

              <p><BsHeart color= "#FE374C"/></p>
            </IconContext.Provider>
          </div>
          <div className='hoursShare'>
              <p><VscBook color= "#5F2ECC" style={{paddingBottom: "4px" }} size='1.4rem'/> $15.00 / 50 min</p>
              <span><BsFillShareFill color= "#4D7DF9"/></span>
          </div>
          <div>
            <Button text='Reservar Clase' className='container-fluid'/>
          </div>
        </div>
      </CardStyle>
    </ContainerCard>
  )
}
