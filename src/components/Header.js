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
  }, []);
  if (!isMobile.current) {
    return (
      <div className='everything-h'>
        <a className='pv-icon'><img src={ pvIcon }/></a>
        <a className='navBar-link-a'><Link className='navBar-link' to='/'>HOME</Link></a>
        <a className='navBar-link-a'><Link className='navBar-link' to='/projetos'>PROJETOS</Link></a>
        <div className='buttons-nav'>
          <a target='_blank' href='https://www.linkedin.com/in/paulo-vitor-martins-silva-dev/' className='navBar-button'><img className='navImage' src={ linkedinIcon }/></a>
          <a target='_blank' href='https://github.com/PauloVitorMartins' className='navBar-button'><img className='navImage' src={ gitHubIcon }/></a>
          <a target='_blank' href='maito:pm885144@gmail.com' className='navBar-button'><img className='navImage' src={ emailIcon }/></a>
          <a target='_blank' href='https://wa.me/5531983114110' className='navBar-button'><img className='navImage' src={ zapIcon }/></a>
        </div>
      </div>
    )
  }
  if (isMobile.current === true && buttonUse === false) {
      return (
        <div className='everything-h'>
          <a onClick={showSideBar}><img className='sideBarIcon-hide' src={sideBarIcon}/></a>
          <a className='pv-icon'><img src={ pvIcon }/></a>
          <a className='navBar-link-a'><Link className='navBar-link' to='/'>HOME</Link></a>
          <a className='navBar-link-a'><Link className='navBar-link' to='/projetos'>PROJETOS</Link></a>
        </div>
      )
    }
    if (isMobile.current === true && buttonUse === true) {
      return (
        <div className='everything-h'>
          <div className='sideBar'>
          <a onClick={showSideBar}><img className='sideBarIcon' src={sideBarIcon}/></a>
          <a target='_blank' href='https://www.linkedin.com/in/paulo-vitor-martins-silva-dev/' className='sideBar-button'><img className='sideImage' src={ linkedinIcon }/></a>
          <a target='_blank' href='https://github.com/PauloVitorMartins' className='sideBar-button'><img className='sideImage' src={ gitHubIcon }/></a>
          <a target='_blank' href='maito:pm885144@gmail.com' className='sideBar-button'><img className='sideImage' src={ emailIcon }/></a>
          <a target='_blank' href='https://wa.me/5531983114110' className='sideBar-button'><img className='sideImage' src={ zapIcon }/></a>
          </div>
          <a className='navBar-link-a'><Link className='navBar-link' to='/'>HOME</Link></a>
          <a className='navBar-link-a'><Link className='navBar-link' to='/projetos'>PROJETOS</Link></a>
        </div>
      )
    }
  }