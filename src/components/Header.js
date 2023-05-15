import React from 'react';
import emailIcon from '../images/emailIcon.png';
import { useEffect, useState, useRef } from 'react';
import sideBarIcon from '../images/sideBarIcon.png';
import { Link } from 'react-router-dom';
import zapIcon from '../images/zapIcon.png';
import pvIcon from '../images/pv-icon.png';
import linkedinIcon from '../images/linkedinIcon.png';
import gitHubIcon from '../images/gitHubIcon.png';
import '../css/header.css'

export default function Home () {
  const [buttonUse, setButtonUse] = useState(false);
  const showSideBar = () => {
    if (buttonUse === false) {
      setButtonUse(true);
    }
    if (buttonUse === true) {
      setButtonUse(false);
    }
  }
  let isMobile = useRef(false);
  const [mobile, setMobile] = useState(false);
  const resize = () => {
    if (window.innerWidth > 600) {
      if(isMobile.current) {
        isMobile.current = false;
        setMobile(false);
        console.log(mobile);
      }
    } else {
      if(!isMobile.current) {
        isMobile.current = true;
        setMobile(true);
      }
    }
  }
  useEffect(() => {
    resize();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });
  if (!isMobile.current) {
    return (
      <div className='everything-h'>
        <p className='pv-icon'><img alt='site-icon' src={ pvIcon }/></p>
        <p className='navBar-link-a'><Link className='navBar-link' to='/'>HOME</Link></p>
        <p className='navBar-link-a'><Link className='navBar-link' to='/projetos'>PROJETOS</Link></p>
        <div className='buttons-nav'>
          <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/paulo-vitor-martins-silva-dev/' className='navBar-button'><img alt='button to linkedin' className='navImage' src={ linkedinIcon }/></a>
          <a rel="noreferrer" target='_blank' href='https://github.com/PauloVitorMartins' className='navBar-button'><img alt='button to gitHub' className='navImage' src={ gitHubIcon }/></a>
          <a rel="noreferrer" target='_blank' href='mailto:pm885144@gmail.com' className='navBar-button'><img alt='button-to-email' className='navImage' src={ emailIcon }/></a>
          <a rel="noreferrer" target='_blank' href='https://wa.me/5531983114110' className='navBar-button'><img alt='button whatsApp chat' className='navImage' src={ zapIcon }/></a>
        </div>
      </div>
    )
  }
  if (isMobile.current === true && buttonUse === false) {
      return (
        <div className='everything-h'>
          <p onClick={showSideBar}><img alt='sideBarIcon' className='sideBarIcon-hide' src={sideBarIcon}/></p>
          <p className='pv-icon'><img alt='site icon' src={ pvIcon }/></p>
          <p className='navBar-link-a'><Link className='navBar-link' to='/'>HOME</Link></p>
          <p className='navBar-link-a'><Link className='navBar-link' to='/projetos'>PROJETOS</Link></p>
        </div>
      )
    }
    if (isMobile.current === true && buttonUse === true) {
      return (
        <div className='everything-h'>
          <div className='sideBar'>
          <p onClick={showSideBar}><img alt='sideBarIcon' className='sideBarIcon' src={sideBarIcon}/></p>
          <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/paulo-vitor-martins-silva-dev/' className='sideBar-button'><img alt='linkedin button' className='sideImage' src={ linkedinIcon }/></a>
          <a target='_blank' rel="noreferrer" href='https://github.com/PauloVitorMartins' className='sideBar-button'><img alt='button to gitHub' className='sideImage' src={ gitHubIcon }/></a>
          <a target='_blank' rel="noreferrer" href='mailto:pm885144@gmail.com' className='sideBar-button'><img alt='button to email' className='sideImage' src={ emailIcon }/></a>
          <a target='_blank' rel="noreferrer" href='https://wa.me/5531983114110' className='sideBar-button'><img alt='button to whatsApp' className='sideImage' src={ zapIcon }/></a>
          </div>
          <p className='navBar-link-a'><Link className='navBar-link' to='/'>HOME</Link></p>
          <p className='navBar-link-a'><Link className='navBar-link' to='/projetos'>PROJETOS</Link></p>
        </div>
      )
    }
  }