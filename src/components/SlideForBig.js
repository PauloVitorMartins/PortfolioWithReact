import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SlideImage from './SlideImage';
import { SwiperSlide, Swiper } from 'swiper/react';
import '../css/projetos.css';
//importação dos links
import {
  linkNetflix,
  linkRPG,
  linkPaletaDeCores,
  linkTrybewarts,
  linkTrybeSmith,
  linkTrybersAndDragons,
  linkTrybeFut,
  linkToDo,
  linkGuessColor,
  linkTrybeStarWars, 
} from '../linksSlides';
// importação dos textos
import {
  textNetflix,
  textRPG,
  textPaletaDeCores,
  textTrybewarts,
  textStarWars,
  textTrybeFut,
  textTrybeSmith,
  textTrybersAndDragons,
  textGuessColor,
  textToDo } from '../texts';
//swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// gifs imports
import netflixGif from '../gifs/netflixClone.gif';
import rpgGif from '../gifs/rpgFantasy.gif';
// images imports
import starWars from '../images/StarWars.png';
import trybeFut from '../images/TrybeFut.png';
import trybersAndDragons from '../images/TrybersAndDragons.png';
import trybeSmith from '../images/TrybeSmith.png';
import netflix from '../images/netflix.png';
import rpgFantasy from '../images/site.png';
import trybewarts from '../images/Trybewarts.png';
import guessTheColor from '../images/guessTheColor.png';
import paletaDeCores from '../images/paletaDeCores.png';
import toDo from '../images/toDo.png';
export default function SlideForBig () {
  return (
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
      <SlideImage linkSlide={linkNetflix} type='front-end' text={ textNetflix } title='NetflixClone' image={netflix} imageTwo={netflixGif}/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage linkSlide={linkRPG} type='front-end' text={textRPG} title='Rpg Fantasy' image={rpgFantasy} imageTwo={rpgGif}/>
      </SwiperSlide>
      <SwiperSlide><SlideImage linkSlide={linkTrybeStarWars} type='full-stack' text={textStarWars} title='Star Wars' image={starWars} /></SwiperSlide>
      <SwiperSlide><SlideImage linkSlide={linkPaletaDeCores} type='front-end' text={textPaletaDeCores} title='Paleta de Cores' image={paletaDeCores} /></SwiperSlide>
      <SwiperSlide><SlideImage linkSlide={linkTrybewarts} type='front-end' text={textTrybewarts} title='Trybewarts' image={trybewarts} /></SwiperSlide>
      <SwiperSlide><SlideImage linkSlide={linkGuessColor} type='front-end' text={textGuessColor} title='Jogo advinhe a cor RGB' image={guessTheColor} /></SwiperSlide>
      <SwiperSlide><SlideImage linkSlide={linkToDo} type='front-end' text={textToDo} title='To Do List' image={toDo} /></SwiperSlide>
      <SwiperSlide><SlideImage linkSlide={linkTrybeFut} type='back-end' text={textTrybeFut} title='TrybeFut' image={trybeFut} /></SwiperSlide>
      <SwiperSlide><SlideImage linkSlide={linkTrybersAndDragons} type='back-end' text={textTrybersAndDragons} title='TrybersAndDragons' image={trybersAndDragons} /></SwiperSlide>
      <SwiperSlide><SlideImage linkSlide={linkTrybeSmith} type='back-end' text={textTrybeSmith} title='TrybeSmith' image={trybeSmith} /></SwiperSlide>
      ...
    </Swiper>
  )
}