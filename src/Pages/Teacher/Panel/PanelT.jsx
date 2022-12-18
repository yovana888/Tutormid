import React from 'react'
import {PanelBody} from './Style'
import ProfileCard from '../../../Components/Cards/ProfileCard/ProfileCard'

export default function PanelT() {
  return (
    <PanelBody>
      <div className='container'>
        <div className='row '>
          <div className='col-md-5'>
            <ProfileCard isStudent={true}
            />
            svgadgaega
          </div>
        </div>
      </div>
    </PanelBody>
  )
}
