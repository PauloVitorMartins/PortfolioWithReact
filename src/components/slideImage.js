import '../css/projetos.css';
import Textinformation from '../components/TextInformation';
import { useState } from 'react';

export default function SlideImage (props) {
    const title = props.title;
    const image = props.image;
    const text = props.text;
    const imageTwo = props.imageTwo;
    const [imagesExibit, setImageExibit] = useState(image);
    const [mouseIsOVer, setMouseIsOver] = useState(false);
    const funcSet = () => {
      if ( imageTwo === undefined ) {
        setMouseIsOver(true);
        return 0;
      }
      if ( imagesExibit === image ) {
        setMouseIsOver(true);
        setImageExibit(imageTwo);
      }
    }
    const funcSetOut = () => {
      if ( imageTwo === undefined ) {
        setMouseIsOver(false);
        return 0;
      }
      if ( imagesExibit === imageTwo ) {
        setMouseIsOver(false);
        setImageExibit(image);
      }
    }
      return (
        <>
        <Textinformation text={text} isOver={mouseIsOVer} />
        <a ><img onMouseOver={funcSet} onMouseLeave={funcSetOut} className='imagesSites' src={imagesExibit}/></a>
        <p className='title-slide' >{title}</p>
        </>
      )
  }