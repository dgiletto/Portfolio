import React from 'react';
import '../App.css';
import Typewriter from '../Components/Typewriter';
import Coder from "../Images/coding_avatar.png";
import "animate.css";

function Home() {
  return (
    <div className="IntroductionPage">
      <div className="IntroductionText">
        <h1>Hello There!</h1>
        <h1>
          My Name is <b>Dylan Giletto</b>
        </h1>
        <Typewriter />
      </div>
      <div className= "animate__animated animate__bounceIn">
        <img className ="Coder" src={Coder} alt="" />
      </div>
    </div>
  );
}

export default Home;