import React, { useState} from 'react'
import { Card, Phone, Calendar  } from './Styles'
import { FiEdit } from 'react-icons/fi';
import ModalProfileStudents from '../../../Pages/Student/Modals/ProfileStudents/ProfileStudents'

export default function ProfileCard(props) {

  const [showModalProfile, setshowModalProfile] = useState(false);
  const toggleModalProfile = () => {
    setshowModalProfile(!showModalProfile)
  } 

  return (
    <Card>
      <div className='wrapper-grid'>
        <div className="contenedor">
          <div className="banner-img"></div>
            <img src={props.img} alt="" className="profile-img" />
            <div className='content-card'>
              <h1 className='name'><FiEdit onClick={() => {toggleModalProfile() }} color='#0B6AFF' size="19"/> {props.name}</h1>

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

            <ModalProfileStudents toggle={toggleModalProfile} isOpen={showModalProfile} />
        </div>
      </div>     
    </Card>
  )
}

