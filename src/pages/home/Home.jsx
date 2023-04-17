import React from 'react'
import NavHero from '../../components/navhero/NavHero'
import Recommendation from '../../components/recommendation/Recommendation'
import Slider from '../../components/slider/Slider'
import Sell from '../../components/Sell/Sell'
import Tips from '../../components/tips/Tips'
import Title from '../../components/title/Title'
function Home() {
  return ( <div>
      <NavHero />   
      <Recommendation/>
       <Slider/> 
       <Sell/>
       <Title/>
       <Tips/>
       </div>
  )
}

export default Home