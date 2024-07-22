import React from 'react'
import OffersComponent from './OffersComponent'
import Categories from './Categories'
import { Mega_Offer } from '../utils/constants'
const BodyComponent = () => {
  return (
    <div>
        <div className='savings'>
            <img src={Mega_Offer} alt="" />
        </div>
        <OffersComponent/>
        <Categories/>
    </div>
  )
}

export default BodyComponent