import React from 'react'
import { Card } from './Styles'
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
                    <p className='number'>975635061</p>
                    </>
                    :
                    <>
                    <div className='d-flex justify-content-around align-items-center'>
                      <p className='email'>{props.email}</p>
                      <p className='date'>{props.date}</p>
                    </div>
                    <p className='number'>975635061</p>
                        </>
                      }
            </div>

              
        </div>
      </div>     
    </Card>
  )
}


