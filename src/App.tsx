import React, { useEffect, useState } from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { NavBar } from './components/Navbar';
import { Button } from './components/Button';
import { Input } from './components/Input';


function App() {

  const [repoName, setRepoName] = useState<string>('');

  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Input setValue={setRepoName} />
    </React.Fragment>
  );
}

export default App;
