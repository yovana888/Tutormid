import React from 'react'
import {PanelBody} from './Style'
import ProfileCard from '../../../Components/Cards/ProfileCard/ProfileCard'

export default function PanelT() {
  return (
    <PanelBody>
      <div className='container'>
        <div className='row '>
          <div className='col-md-5'>
            <ProfileCard 
              img='/Ellipse 38.svg'
              name='Raul Perez Rojas'
              email='raulperez@gmail.com'
              number='975635061'
              date='20-11-1993'
              description='Docente especializado en el Área de Aritmética, Algebra y Razonamiento Matemático Nivel Secundario y Pre Universitario con amplia trayectoria...'
              isStudent={false}
            />
          </div>
        </div>
      </div>
    </PanelBody>
  )
}
