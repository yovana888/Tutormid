import React, { useState, useContext } from 'react'
import { Card, Phone, Calendar  } from './Styles'
import { FiEdit } from 'react-icons/fi';
import ModalProfileStudents from '../../../Pages/Student/Modals/ProfileStudents/ProfileStudents'
import TabsTeacher from '../../../Pages/Teacher/TabsTeacher/TabsTeacher';

export default function ProfileCard(props) {
  
  const [showModalProfile, setshowModalProfile] = useState(false);
  const toggleModalProfile = () => {
    setshowModalProfile(!showModalProfile)
  } 

  const [showModalPerfilTeacher, setShowModalPerfilTeacher] = useState(false);
  const toggleModalPerfilTeacher = () => {
    setShowModalPerfilTeacher(!showModalPerfilTeacher)
  } 

  const openModal=() =>{
    if(props.isStudent){
      toggleModalProfile()
    }else{
      toggleModalPerfilTeacher()
    }
  }

  return (
    <Card>
      <div className='wrapper-grid'>
        <div className="contenedor">
          <div className="banner-img"></div>
            <img src={props.img} alt="" className="profile-img" />
            <div className='content-card'>
              <h1 className='name'><FiEdit style={{cursor:'pointer'}} onClick={() => { openModal() }} color='#0B6AFF' size="19"/> {props.name}</h1>

                  {(props.isStudent) ? 
                    <>
                    <p className='email'>{props.email}</p>
                    <p className='number'>{props.number}</p>
                    </>
                    :
                    <>
                    <p className='email'>{props.email}</p>
                    <div className='d-flex justify-content-around align-items-center'>             
                      <p className='number'><Phone/> {props.number?props.number:'--'}</p>
                      <p className='date'><Calendar/>  {props.date?props.date:'--'}</p>
                    </div>
                    <p className='description'>{props.description}<br/><br/>
                    </p>
                    
                        </>
                      }
            </div>

            <ModalProfileStudents toggle={toggleModalProfile} isOpen={showModalProfile} />
            <TabsTeacher toggle={toggleModalPerfilTeacher} isOpen={showModalPerfilTeacher}/>
        </div>
      </div>     
    </Card>
  )
}

