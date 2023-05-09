import Header from '../components/Header';
import React, { useEffect, useRef, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SlideImage from '../components/slideImage';
import { SwiperSlide, Swiper } from 'swiper/react';
import '../css/projetos.css';
// importação dos textos
import { textNetflix, textRPG, textPaletaDeCores, textTrybewarts, textGuessColor, textToDo } from '../texts';
//swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// gifs imports
import netflixGif from '../gifs/netflixClone.gif';
import rpgGif from '../gifs/rpgFantasy.gif';
// images imports
import netflix from '../images/netflix.png';
import rpgFantasy from '../images/site.png';
import trybewarts from '../images/Trybewarts.png';
import guessTheColor from '../images/guessTheColor.png';
import paletaDeCores from '../images/paletaDeCores.png';
import toDo from '../images/toDo.png';

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
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
        <SlideImage text={ textNetflix } title='NetflixClone' image={netflix} imageTwo={netflixGif}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage text={textRPG} title='Rpg Fantasy' image={rpgFantasy} imageTwo={rpgGif}/>
        </SwiperSlide>
        <SwiperSlide><SlideImage text={textPaletaDeCores} title='Paleta de Cores' image={paletaDeCores} /></SwiperSlide>
        <SwiperSlide><SlideImage text={textTrybewarts} title='Trybewarts' image={trybewarts} /></SwiperSlide>
        <SwiperSlide><SlideImage text={textGuessColor} title='Jogo advinhe a cor RGB' image={guessTheColor} /></SwiperSlide>
        <SwiperSlide><SlideImage text={textToDo} title='To Do List' image={toDo} /></SwiperSlide>
        ...
      </Swiper>
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
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <SlideImage text={ textNetflix } title='NetflixClone' image={netflix} imageTwo={netflixGif}/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage text={textRPG} title='Rpg Fantasy' image={rpgFantasy} imageTwo={rpgGif}/>
      </SwiperSlide>
      <SwiperSlide><SlideImage text={textPaletaDeCores} title='Paleta de Cores' image={paletaDeCores} /></SwiperSlide>
      <SwiperSlide><SlideImage text={textTrybewarts} title='Trybewarts' image={trybewarts} /></SwiperSlide>
      <SwiperSlide><SlideImage text={textGuessColor} title='Jogo advinhe a cor RGB' image={guessTheColor} /></SwiperSlide>
      <SwiperSlide><SlideImage text={textToDo} title='To Do List' image={toDo} /></SwiperSlide>
      ...
    </Swiper>
    </div>
    </div>
  )
}