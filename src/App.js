import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer';
import React from 'react';
import Secondary from './Components/Secondary';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Secondary />
      <Footer />
    </div>
  );
}

export default App;
