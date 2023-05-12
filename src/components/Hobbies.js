import React from 'react';
import singIcon from '../images/icons/cantando.png';
import acousticGuitarIcon from '../images/icons/violão.png';
import camping from '../images/icons/acampar.png';
import '../css/stack.css';

export default function HobbiesSec () {
  return (
            <>
            <p className='focus-title-sec'>Hobbies</p>
            <div className='stacks-icons-div-blocks'>
                <div>
                  <img src={singIcon}/>
                  <p>Sing</p>
                </div>
                <div className='icon-itself'>
                  <img src={acousticGuitarIcon}/>
                  <p>Guitar</p>
                </div>
                <div className='icon-itself'>
                  <img src={camping}/>
                  <p>Camping</p>
                </div>
            </div>
            </>
  )
}