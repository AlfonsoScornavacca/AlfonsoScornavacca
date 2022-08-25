import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <>
      <Navbar >
        <Container className='main-nav'>
          <Nav className="second-nav">
              <button>Home</button>
              <button >Work Experiences</button>
              <button >Certifications</button>
              <button >Contact</button>
          </Nav>
        </Container>
      </Navbar>
 
    </>
  );
}

export default NavBar;