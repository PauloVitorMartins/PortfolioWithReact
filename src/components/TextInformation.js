import React from 'react';
import '../css/projetos.css';

export default function Home (props) {
    const linkSlide = props.linkSlide;
    const text = props.text;
    const isOver = props.isOver;
  if ( isOver === true ) {
    return (
        <div className='textInformation-balloon-show'>
            <p>{ text }</p>
            <a target='_blank' className='link-text-information' href={linkSlide}>Repositório Git Hub</a>
        </div>
    )
  } 
  return (
    <div className='textInformation-balloon-hide'>
        <p>{ text }</p>
        <a href={linkSlide}>Repositório Git Hub</a>
    </div>
  )
}