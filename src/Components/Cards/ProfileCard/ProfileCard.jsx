import React, {useState} from 'react'
import { Card } from './Styles'
import { FiEdit } from 'react-icons/fi';
import ModalProfileStudents from '../../../Pages/Student/Modals/ProfileStudents/ProfileStudents'

export default function ProfileCard() {

  const [showModalProfile, setshowModalProfile] = useState(false);
  const toggleModalProfile = () => {
    setshowModalProfile(!showModalProfile)
  }

  return (
    
    <Card>
      <> 
        <div className='wrapper-grid'>
            <div className="contenedor">
                <div className="banner-img"></div>
                <img src="/Ellipse 27.svg" alt="" className="profile-img" />
                <h1 className='name'><FiEdit onClick={() => {toggleModalProfile() }} color='#0B6AFF' size="19"/> Amelia Perez Rojas</h1>
                <p className='email'>amelia@gmail.com</p>
                <p className='number'>975635061</p>
            </div>
        </div>
        <ModalProfileStudents toggle={toggleModalProfile} isOpen={showModalProfile} />
        </>
    </Card>
  )
}
