import React from 'react';
import './Nav.css'

function NavBar() {
  return (
    <>
      <div >
        <div className='main-nav'>
          <div className="second-nav">
              <button className='button'>Home</button>
              <button className='button'>Work Experiences</button>
              <button className='button'>Certifications</button>
              <button className='button'>Contact</button>
          </div>
        </div>
      </div>
 
    </>
  );
}

export default NavBar;