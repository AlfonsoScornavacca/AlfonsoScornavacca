import './App.css';
import React from 'react';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer className='footer'/>
    </div>
  );
}

export default App;
