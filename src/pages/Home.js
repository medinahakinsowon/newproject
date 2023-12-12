import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/readingTable.jpg';
import logoImage from '../assets/logo.png';

const Home = () => {
  const Navigate = useNavigate()
  return (
    <div className='home_page'>
      <div>
        <img src={backgroundImage} className='background_image' alt='reading-table' />
      </div>
      <h2 className='home_text'>New Note Application</h2>
      <img src={logoImage} className='logo_Image' alt='logo' />
      <div className='buttons_section'>
        <button className='register_button' onClick={()=>{Navigate('/Register')}}>
          Create Account
        </button>
        <button className='login_button' onClick={()=>{Navigate('/Login')}}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Home
