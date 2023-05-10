import '../css/projetos.css';
import Textinformation from '../components/TextInformation';
import { useState } from 'react';

export default function SlideImage (props) {
    const title = props.title;
    const type = props.type
    const image = props.image;
    const text = props.text;
    const imageTwo = props.imageTwo;
    const [imagesExibit, setImageExibit] = useState(image);
    const [mouseIsOVer, setMouseIsOver] = useState(false);
    const [wasMouseHere, setWasMouseHere] = useState(0);
    const funcSet = () => {
      if ( wasMouseHere === 0 ) {
        setMouseIsOver(true);
        setWasMouseHere(1);
        if (imageTwo === undefined) {
          return 0;
        } else {
          setImageExibit(imageTwo);
        }
        setImageExibit(imageTwo);
      }
      if ( wasMouseHere === 1 ) {
        setImageExibit(image);
        setMouseIsOver(false);
        setWasMouseHere(0);
      }
    }
    
      return (
        <>
        <Textinformation text={text} isOver={mouseIsOVer} />
        <p className='title-slide' >{title}</p>
        <p><img alt='slideOfAnProject' onClick={funcSet} onMouseOver={funcSet} className='imagesSites' src={imagesExibit}/></p>
        <p className='title-slide'>{type}</p>
        </>
      )
  }