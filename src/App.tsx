import React from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { NavBar } from './components/Navbar';
import { Button } from './components/Button';


function App() {

  const handleSearch = (title: string) => {
    console.log('Entrou handleSearch', title)
  }

  const handleSend = (title: string) => {
    console.log('Entrou handleSend', title)
  }

  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Button title='Buscar' handleClick={handleSearch} />
      <Button title='Enviar' handleClick={handleSend} />
    </React.Fragment>
  );
}

export default App;
