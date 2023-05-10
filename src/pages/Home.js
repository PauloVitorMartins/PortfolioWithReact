import Header from '../components/Header';
import { Link } from 'react-router-dom';
import React from 'react';

import '../css/home.css';

export default function Home () {
  return (
    <div className='everything'>
    <div className='heroSec'>
      <Header />
      <div className='main-cont-home'>
        <p className='focus-title'>Paulo Vitor</p>
        <p className='second-focus-title'>Martins Silva</p>
        <p className='little-text'>Bem vindo ao meu Portfólio! Meu nome é Paulo Vitor, <br/> estudante de Desenvolvimento Web pela Trybe!</p>
      </div>
      <div className='button-projetos-div'>
        <p><Link className='button-projetos' to='/projetos'>Projetos</Link></p>
      </div>
    </div>
    <div className='aboutMeSec'>

    </div>
    </div>
  )
}