import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className='navbar-container'>
    <div className='navbar'>
      <div className='navbar-logo'>
        <Link to='/'><img src="https://i.ibb.co/cXZ7hLf/Screenshot-2023-06-27-135906.png" alt=""/></Link>
      </div>
      <ul>
        <Link to='/'><li>HOME</li></Link>
        <Link to='/features' smooth><li>STATISTICS</li></Link>
        <Link to='/marketupdates' smooth><li>MARKET</li></Link>
        <Link to='/news' smooth><li>NEWS</li></Link>
        <Link to='/join' smooth><li>JOIN US</li></Link>
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
