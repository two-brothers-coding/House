import React from 'react'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'
import './navbar.scss'
function NavBar() {
  return (
    <div className='navbarHeader'>
        <div className="logo">
            <img className='logo' src={logo} alt="logo"  />
        </div>
        
        <div className="heroLinks">
             <Link className='linkBtn' to='/about'> About Us</Link>
             <Link className='linkBtn' to='/article'>Article</Link>
             <Link className='linkBtn' to='/property'>Property </Link>
             <button className='signBtn'> Sign Up!</button>
             </div>
        </div>
    
  )
}

export default NavBar