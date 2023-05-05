import Header from './Header';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import netflix from '../images/netflix.png';
import rpgFantasy from '../images/site.png';
import trybewarts from '../images/Trybewarts.png';
import guessTheColor from '../images/guessTheColor.png';
import paletaDeCores from '../images/paletaDeCores.png';
import toDo from '../images/toDo.png';
import SlideImage from './slideImage';
import { SwiperSlide, Swiper } from 'swiper/react';
import '../css/home.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home () {
  return (
    <div className='everything'>
      <Header />
      <div className='main-content'>
        <p className='focus-title' >Paulo Vitor</p>
        <p className='second-focus-title'>MARTINS SILVA</p>
        <p className='chamada'>fique com alguns dos meus projetos!</p>
      </div>
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
      <SlideImage text='NetflixClone' image={netflix} />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage text='Rpg Fantasy' image={rpgFantasy} />
      </SwiperSlide>
      <SwiperSlide><SlideImage text='Paleta de Cores' image={paletaDeCores} /></SwiperSlide>
      <SwiperSlide><SlideImage text='Trybewarts' image={trybewarts} /></SwiperSlide>
      <SwiperSlide><SlideImage text='Jogo advinhe a cor RGB' image={guessTheColor} /></SwiperSlide>
      <SwiperSlide><SlideImage text='To Do List' image={toDo} /></SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}