import React from 'react'
import AdsCards from '../../Components/Cards/AdsCards/AdsCards'
import Button from '../../Components/Elements/Button/Button'
import { BodyAds } from './Styles'

export default function Ads() {
  return (
    <BodyAds>
    <div className='container body'>
          <h3 className='results'>Se encontrarón  10 profesores</h3> 
          <AdsCards/>
          <Button text='Ver más profesores    ' type='button' color='outline' className='d-flex justify-content-center' />
    </div>
    </BodyAds>
    
  )
}
