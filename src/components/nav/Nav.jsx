import React from 'react'
import './nav.css'
import 'tailwindcss/tailwind.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai' 
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquare} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import techgen from '../../assets/techgen.png'


const Nav = () => {

  return (
    <nav className='container'> 
      <div className='logo'>
        <img src={techgen} alt='' className='logo'/>
      </div>
      <ul>
        <li><a href='#header'><AiOutlineHome/>Home</a></li>
        <li><a href='#about'><AiOutlineUser/>About</a></li>          
        <li><a href='#experience'><BiBook/>Experience</a></li>
        <li><a href='#services'><RiServiceLine/>Services</a></li>  
        <li><a href='#contact'><BiMessageSquare/>Contact</a></li>                  
      </ul>
      <div className='toggle-btn'>
        <GiHamburgerMenu/>
      </div>
        
      <div className='dropdown-menu'>
        <li><a href='#header'><AiOutlineHome/>Home</a></li>
        <li><a href='#about'><AiOutlineUser/>About</a></li>          
        <li><a href='#experience'><BiBook/>Experience</a></li>
        <li><a href='#services'><RiServiceLine/>Services</a></li>  
        <li><a href='#contact'><BiMessageSquare/>Contact</a></li>         
      </div>

    </nav>
  )
}

export default Nav
