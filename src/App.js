import './App.css';
import React from 'react';
import Header from './Components/Header'
import Main from './Components/Main'
import Certifications from './Components/Certifications';
import Footer from './Components/Footer';
import {  Routes, Route } from "react-router-dom";
import Contact  from './Components/Contact';
import Work  from './Components/Work';

function App() {
  return (
    <div className="App"> 
      <Header />
      <Routes>       
        <Route path='/' element={<Main />}/>
        <Route path='/certifications' element={<Certifications/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
