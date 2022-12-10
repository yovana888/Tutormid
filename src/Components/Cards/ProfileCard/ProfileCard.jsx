import React from 'react'
import { Card } from './Styles'
import { FiEdit } from 'react-icons/fi';

export default function ProfileCard() {
  return (
    <Card>
        <div className='wrapper-grid'>
            <div className="contenedor">
                <div className="banner-img"></div>
                <img src="/Ellipse 27.svg" alt="" className="profile-img" />
                <h1 className='name'><FiEdit color='#0B6AFF' size="19"/> Amelia Perez Rojas</h1>
                <p className='email'>amelia@gmail.com</p>
                <p className='number'>975635061</p>
            </div>
        </div>
      
    </Card>
  )
}
