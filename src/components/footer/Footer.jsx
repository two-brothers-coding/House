import React from 'react'
import logo from '../../images/Logo.png'
import icons from '../../images/footer-icons.png'
import './footer.scss'
function Footer() {
  return (
    <div className='footer'>
        <div className="bio">
          <img src={logo} alt="logo" />
          <p className='bioText'>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
          <img src={icons} alt="icons" />
        </div>
        <div className="property">
            <h2 className='main'>Property</h2>
            <h3 className='text' >House</h3>
            <h3 className='text'>Apartment</h3>
            <h3 className='text'>Villa</h3>
        </div>
        <div className="article">
            <h2 className='main' > Article</h2>
            <h3 className='text'>New Article</h3>
            <h3 className='text'>Popular Article</h3>
            <h3 className='text'>Most Read</h3>
            <h3 className='text'>Tips & Tricks</h3>
        </div>
        <div className="contact">
            <h2 className='main' >Contact</h2>
            <h3 className='text'>2464 Royal Ln. Mesa, New Jersey 45463</h3>
            <h3 className='text'>(671) 555-0110</h3>
            <h3 className='text'>info@hounter.com</h3>
        </div>
    </div>
  )
}

export default Footer