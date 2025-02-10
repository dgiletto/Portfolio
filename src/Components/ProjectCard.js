import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';

export const ProjectCard = ({ title, photo}) => {
    const desc = {
        PCMartDesc:
            "This was a group project I did for a software engineering class with 4 other students. We collaborated together to make a working website which sold different hardware components for computers. I learned how to use React, Javascript, and CSS while also accumulating knowledge about working on teams for projects.",
        PCMartGithub: "https://github.com/dgiletto/Team-6",
        PCMartWebsite: "https://dgiletto.github.io/Team-6/",

        StockDesc:
            "This is a machine learning project which uses a K-Nearest Neighbors (or KNN for short) algorithm to make accurate predictions on the trajectory of a certain stock.",
        StockGithub: "https://github.com/dgiletto/Stock_Prediction",
        StockWebsite: "https://github.com/dgiletto/Stock_Prediction",
    }
    return (
        <div className="projectBox">
      <img className="projectPhoto" src={photo} alt="Project display" />
      <div>
        <br />
        <h3>{title}</h3>
        <br />
        {desc[title + "Desc"]}
        <br />

        <a href={desc[title + "Github"]} target="_blank" rel="noreferrer">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[title + "Website"]} target="_blank" rel="noreferrer">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
    )
}