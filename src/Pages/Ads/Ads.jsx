import React from 'react'
import AdsCards from '../../Components/Cards/AdsCards/AdsCards'
import Button from '../../Components/Elements/Button/Button'
import { BodyAds } from './Styles'
import Filter  from './Filter/Filter'

export default function Ads() {
  return (
    <BodyAds>
      <section>
        <Filter/>
      </section>
    <div className='container body'>
          <h3 className='results'>Se encontrarón  10 profesores</h3> 
          <AdsCards/>
          <div className='btn-ads'>
            <Button size='ads-size' text='Ver más profesores    ' type='button' color='outline' className='' />
          </div>
          
    </div>
    </BodyAds>
    
  )
}
