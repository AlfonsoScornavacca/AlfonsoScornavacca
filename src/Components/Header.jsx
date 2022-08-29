import React from 'react';
import './Header.css';
import NavBar from './Header/Nav';


function Head() {
    return (
        <div id='mainn'>
        <div className='div-1'>
            <NavBar />  
        </div>       
        <div className='div-2'>
            <h1 className='h1'>Wellcome!!</h1>
        </div>
        <div className='div-1'>
        </div>
        </div>
    );
  }
  
  export default Head;
  