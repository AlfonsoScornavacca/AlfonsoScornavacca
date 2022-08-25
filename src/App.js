import './App.css';
import React from 'react';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer';
import Secondary from './Components/Secondary';
import Others from './Components/Others';
import Modall from './Components/Modal';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className='buttons'>
        <div className='modal'>
          <Modall boton='Main Skills 🙌' cuerpo={<Secondary />}/>
        </div>
        <div className='modal'>
          <Modall boton='Other Skills 👌' cuerpo={<Others />}/>
        </div>
      </div>
      
      <Footer className='footer'/>
    </div>
  );
}

export default App;
