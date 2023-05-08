import React from 'react';

export default function Home (props) {
    const text = props.text;
    const isOver = props.isOver;
  if ( isOver === true ) {
    return (
        <div className='textInformation-balloon-show'>
            <p>{ text }</p>
        </div>
    )
  } 
  return (
    <div className='textInformation-balloon-hide'>
        <p>{ text }</p>
    </div>
  )
}