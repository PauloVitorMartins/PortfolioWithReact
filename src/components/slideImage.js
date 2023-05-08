import '../css/projetos.css';
import { useState } from 'react';

export default function SlideImage (props) {
    const title = props.text;
    const image = props.image;
    const imageTwo = props.imageTwo;
    const [imagesExibit, setImageExibit] = useState(image);
    const funcSet = () => {
      if ( imageTwo === undefined ) {
        return 0;
      }
      if ( imagesExibit === image ) {
        setImageExibit(imageTwo);
      }
    }
    const funcSetOut = () => {
      if ( imageTwo === undefined ) {
        return 0;
      }
      if ( imagesExibit === imageTwo ) {
        setImageExibit(image);
      }
    }
    return (
      <>
      <a ><img onMouseOver={funcSet} onMouseLeave={funcSetOut} className='imagesSites' src={imagesExibit}/></a>
      <p className='title-slide' >{title}</p>
      </>
    )
  }