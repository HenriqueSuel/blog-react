import React from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { NavBar } from './components/Navbar';


function App() {

  const handleClick = () => {
    console.log('Entrou')
  }

  return (
    <React.Fragment>
      <NavBar />
      <Hero />
    </React.Fragment>
  );
}

export default App;
