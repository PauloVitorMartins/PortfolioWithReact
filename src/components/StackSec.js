import React from 'react';
import tsIcon from '../images/icons/tsIcon.png';
import jsIcon from '../images/icons/jsIcon.png';
import cssIcon from '../images/icons/cssIcon.png';
import htmlIcon from '../images/icons/htmlIcon.png';
import nodeJsIcon from '../images/icons/nodeJs.png';
import reactIcon from '../images/icons/react.png';
import linuxIcon from '../images/icons/linuxIcon.png';
import dockerIcon from '../images/icons/dockerIcon.png';
import '../css/stack.css';

export default function StackSec () {
  return (
            <>
            <p className='focus-title-sec'>Stacks</p>
            <div className='stacks-icons-div-blocks'>
                <div>
                  <img src={tsIcon}/>
                  <p>TypeScript</p>
                </div>
                <div className='icon-itself'>
                  <img src={jsIcon}/>
                  <p>JavaScript</p>
                </div>
                <div className='icon-itself'>
                  <img src={cssIcon}/>
                  <p>CSS</p>
                </div>
                <div className='icon-itself'>
                 <img src={htmlIcon}/>
                 <p>HTML</p>
                </div>
            </div>
            <div className='stacks-icons-div-noBlock'>
                <div>
                <img src={nodeJsIcon}/>
                <p>NodeJs</p>
                </div>
              <div className='icon-itself'>
                <img src={reactIcon} />
                <p>ReactJs</p>
              </div>
              <div className='icon-itself'>
                <img src={linuxIcon}/>
                <p>Linux</p>
              </div>
              <div className='icon-itself'>
                <img src={dockerIcon} />
                <p>Docker</p>
            </div>
            </div>
            </>
  )
}