import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
    <div className='navbar'>
      <div className='navbar-logo'>
        <Link to='/'><img src="https://i.ibb.co/cXZ7hLf/Screenshot-2023-06-27-135906.png" alt=""/></Link>
      </div>
      <ul>
        <Link to='/'><li>HOME</li></Link>
        <li>FEATURES</li>
        <li>MARKET</li>
        <li>NEWS</li>
        <li>JOIN US</li>
      </ul>
      <ul>
        <li><TwitterIcon color="" fontSize="large"/></li>
        <li><InstagramIcon color="" fontSize="large"/></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar
