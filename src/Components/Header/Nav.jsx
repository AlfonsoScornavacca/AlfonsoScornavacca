import React from 'react';
import './Nav.css'
import { Nav } from 'react-bootstrap';



function NavBar() {
  return (
    <>
    <Nav>
      <div >
        <div className='main-nav'>
          <div className="second-nav">
            <Nav.Link href="/"><button className='button'>Home</button></Nav.Link>  
            <Nav.Link href="work"><button className='button'>Work Experiences</button></Nav.Link>
            <Nav.Link href="/certifications"><button className='button'>Certifications</button></Nav.Link> 
            <Nav.Link href="/contact"><button className='button'>Contact</button></Nav.Link>
          </div>
        </div>
      </div>
      </Nav>
    </>
  );
}

export default NavBar;