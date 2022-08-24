import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer';
import React from 'react';
import Secondary from './Components/Secondary';
import Modall
 from './Components/Modal';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className='modal'>
      <Modall boton='Skills 👇' cuerpo={<Secondary />}/>
      </div>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
