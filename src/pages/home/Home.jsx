import React from 'react'
import NavHero from '../../components/navhero/NavHero'
import Recommendation from '../../components/recommendation/Recommendation'
import Slider from '../../components/slider/Slider'
import Sell from '../../components/Sell/Sell'

function Home() {
  return ( <div>
      <NavHero />   
      <Recommendation/>
       <Slider/> 
       <Sell/>
       </div>
  )
}

export default Home