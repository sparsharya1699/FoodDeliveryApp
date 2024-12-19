import React from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt='brand-logo' className='logo'></img>
      <ul className='navbar-menu'>
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt='search-icon' className='search-icon'/>
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt='basket-icon' className='basket-icon'/>
            <div className='dot'></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
