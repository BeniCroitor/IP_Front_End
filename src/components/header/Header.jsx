/*eslint-disable*/
import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import { common } from '@mui/material/colors';

export const Header = () => {

  const instagramLink = 'https://www.instagram.com/csusuceava/?hl=ro';
  const facebookLink = 'https://www.facebook.com/CSUSuceava/?locale=ro_RO';

  return (
    <div className="header">

      <img
        src={
          process.env.PUBLIC_URL +
          '/Logo_CSU_Suceava.png'
        }
        alt="Logo CSU Suceava"
        className="logo"
      />
      <div className='links_container'>
        <div className='links'>
          <Link to={instagramLink} target="_blank">
            <InstagramIcon sx={{ fontSize: 45, color: common.white }} />
          </Link>
        </div>
        <div className='links'>
          <Link to={facebookLink} target="_blank">
            <FacebookIcon sx={{ fontSize: 45, color: common.white }} />
          </Link>
        </div>
      </div>


      <div className='auth_container'>
        <div className='login'>
          <h3>LOG IN</h3>
          <PersonIcon sx={{ color: common.white }} />
        </div>
        <div className='reg'>
          <h3>SIGN UP</h3>
          <LoginIcon sx={{ color: common.white }} />
        </div>
      </div>

    </div>
  )
};
