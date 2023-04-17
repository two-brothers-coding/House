import React from 'react'
import './tips.scss'
import {content} from './content'
import rightCard from '../../images/rightHouseCard.png'
import profileIcon from '../../images/Ellipse 6.png'
import clock from '../../images/clock.png'
function Tips() {
 
  return (
    <div className='tips'>
        <div className="cards">
            
        {
            content.map((item,index)=>{
                console.log(item)
                return <div className="card">
                    <div className="mainImg"><img src={item.mainImg} alt="img" /></div>
                        <div className="mainText">
                            <div className="profile">
                                <img src={item.profile} alt="icon" />
                                <h3 className='profileName'>{item.profileName}</h3>
                            </div>
                        <h2 className='rText'>{item.richText}</h2>
                        <div className="clockInfo">
                            {item.icon}
                            <h4 className='clockT'>{item.clockText}</h4>
                        </div>
                        </div>
                </div>
            })
        }
        </div>
        <div className="rightCard">
            <img src={rightCard} alt="house" />
            <div className="profileInfo">
                <img src={profileIcon} alt="profile" />
                <h3 className='profileText'>Cameron Williamson</h3>
            </div>
            <h2 className='text'>12 Things to know before buying a house</h2>
            <p>Want to buy a house but are unsure about what we should know, here I will try to <br/> 
            explain what we should know and check when we want to buy a house</p>
            <div className="clock">
                <img src={clock} alt="clock" />
                <h2>8 min read | 25 Apr 2021</h2>
            </div>
        </div>
    </div>
  )
}

export default Tips