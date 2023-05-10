import Header from '../components/Header';
import React, { useEffect, useRef, useState } from 'react';
import SlideForBig from '../components/SlideForBig';
import SlideForMobile from '../components/SlideForMobile';
import '../css/projetos.css';

export default function Projetos () {
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
      <div className='everything'>
        <Header />
        <div className='main-content'>
          <p className='chamada'>fique com alguns dos meus projetos!</p>
          <p className='paragrafos'>Aqui se encontram projetos de front-end, realizados durante meus estudos na Trybe!</p>
          <p className='paragrafos'>experimente deixar o mouse sobre a imagem para ter uma prévia!</p>
        </div>
      <div className='slides-content'>
      <SlideForBig />
      </div>
      </div>
    )
  }
  return (
    <div className='everything'>
      <Header />
      <div className='main-content'>
        <p className='chamada'>fique com alguns dos meus projetos!</p>
        <p className='paragrafos'>Aqui se encontram projetos de front-end, realizados durante meus estudos na Trybe!</p>
        <p className='paragrafos'>experimente deixar o mouse sobre a imagem para ter uma prévia!</p>
      </div>
    <div className='slides-content'>
    <SlideForMobile />
    </div>
    </div>
  )
}