import React from 'react';
import './App.css';
import Typewriter from './Components/Typewriter';

function App() {
  return (
    <div className="IntroductionPage">
      <div className="IntroductionText">
        <h1>Hello There!</h1>
        <h1>
          My Name is <b>Dylan Giletto</b>
        </h1>
        <Typewriter />
      </div>
    </div>
  );
}

export default App;
