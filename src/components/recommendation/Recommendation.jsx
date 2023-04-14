import React from 'react'
import './recommendation.scss'
import house from '../../images/house-fill.png'
import villa from '../../images/villa.png'
import apartment from '../../images/apartment.png'
function Recommendation() {
  return (
    <div className='houseWrapper'>
        <div className="fHouse">
            <div className="featuredText">
                <div className="line"></div>
                <h3 className='recText'>Our Recommendation</h3>
            </div>
            <h2 className='featuredT'>Featured House</h2>
        </div>
        <div className="houses">
            <div className="link">
                <img src={house} alt="img" />
                <h2>House</h2>
            </div>
            <div className="link">
                <img src={villa} alt="img" />
                <h2>Villa</h2>
            </div>
            <div className="link">
                <img src={apartment} alt="img" />
                <h2>Apartment</h2>
            </div>
            
            
        </div>
    </div>
  )
}

export default Recommendation