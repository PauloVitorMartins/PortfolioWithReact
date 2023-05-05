import React from 'react';
import emailIcon from '../images/emailIcon.png';
import zapIcon from '../images/zapIcon.png';
import pvIcon from '../images/pv-icon.png';
import linkedinIcon from '../images/linkedinIcon.png';
import gitHubIcon from '../images/gitHubIcon.png';
import '../css/header.css'

export default function Home () {
  return (
    <div className='everything-h'>
      <a className='pv-icon'><img src={ pvIcon }/></a>
      <div className='buttons-nav'>
        <a target='_blank' href='https://www.linkedin.com/in/paulo-vitor-martins-silva-dev/' className='navBar-button'><img src={ linkedinIcon }/></a>
        <a target='_blank' href='https://github.com/PauloVitorMartins' className='navBar-button'><img src={ gitHubIcon }/></a>
        <a target='_blank' href='' className='navBar-button'><img src={ emailIcon }/></a>
        <a target='_blank' href='https://wa.me/5531983114110' className='navBar-button'><img src={ zapIcon }/></a>
      </div>
    </div>
  )
}