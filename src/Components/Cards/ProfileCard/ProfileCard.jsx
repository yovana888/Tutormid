import React from 'react'
import { Card, Phone, Calendar  } from './Styles'
import { FiEdit } from 'react-icons/fi';

export default function ProfileCard(props) {
  return (
    <Card>
      <div className='wrapper-grid'>
        <div className="contenedor">
          <div className="banner-img"></div>
            <img src={props.img} alt="" className="profile-img" />
            <div className='content-card'>
              <h1 className='name'><FiEdit color='#0B6AFF' size="19"/> {props.name}</h1>
                  
                  {(props.isStudent) ? 
                    <>
                    <p className='email'>{props.email}</p>
                    <p className='number'>{props.number}</p>
                    </>
                    :
                    <>
                    <p className='email'>{props.email}</p>
                    <div className='d-flex justify-content-around align-items-center'>             
                      <p className='number'><Phone/> {props.number}</p>
                      <p className='date'><Calendar/>  {props.date}</p>
                    </div>
                    <p className='description'>{props.description}<br/><br /><span className='more'>Ver Más</span>
                    </p>
                    
                        </>
                      }
            </div>

              
        </div>
      </div>     
    </Card>
  )
}


