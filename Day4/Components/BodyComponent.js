import React from 'react'
import OffersComponent from './OffersComponent'
import SubCategories from './SubCategories'
import Categories from './Categories'
const BodyComponent = () => {
  return (
    <div>
        <div className='savings'>
            <img src="https://mcprod.sparindia.com/media/wysiwyg/72-hours/7days-Mahasavings.svg" alt="" />
        </div>
        <OffersComponent/>
        <Categories/>
    </div>
  )
}

export default BodyComponent