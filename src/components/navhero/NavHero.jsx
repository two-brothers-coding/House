import React from 'react'
import './navhero.scss'

import pick from '../../images/fluent_location.png'
import arrow from '../../images/eva_arrow-ios-forward-fill.png'
import pic1 from '../../images/traveloka_logo 1.png'
import pic2 from '../../images/traveloka_logo 2.png'
import pic3 from '../../images/traveloka_logo 3.png'
import pic4 from '../../images/traveloka_logo 4.png'
import pic5 from '../../images/house-right.png'
import people from '../../images/1K Peoples.png'
import people2 from '../../images/1K house.png'
function NavHero() {
  return (
    <div className='container heroWraper'>
        
        <div className="leftNavHero">
            
            <h1 className='textOne'>Find the place to<br/>live  <span className='greenText'>your dreams</span> <br/>easily here</h1>
            <p className='ptext'>Everything you need about finding your place to live will be here, where it will be easier for you</p>
            <div className="search">
                <img src={pick}/>
                <input className='searchloc' type="text"  value="Search for the location you want!"  />
                <button className='greenbtn'> Search <img src={arrow} alt="button"/></button>
            </div>
            <h3 className='partnerText'>Our Partnership</h3>
            <div className="partnerImg">
            <img src={pic1}/>
            <img src={pic2}/>
            <img src={pic3}/>
            <img src={pic4}/>
            </div>
        </div> 
    
        <div className="rightNavHero">
          <img src={pic5} alt="house"  />
         <div className="people1">
          
          <img src={people} alt="img" />
          <img src={people2} alt="img" />
         
         </div>
            
        </div>
    </div>
  )
}

export default NavHero