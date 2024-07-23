import React from 'react'
import OffersComponent from './OffersComponent'
import Categories from './Categories'
import { Mega_Offer } from '../utils/constants'
import Items from './Items'
import SuperDealOffer from './SuperDealOffer'
const BodyComponent = () => {
  return (
    <div>
        <div className='savings'>
            <img src={Mega_Offer} alt="" />
        </div>
        <Categories/>
        <Items/>
        <OffersComponent/>
        <SuperDealOffer/>
    </div>
  )
}

export default BodyComponent