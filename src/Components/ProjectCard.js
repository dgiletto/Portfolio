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
            "This is a personal project I did which compares a linear regression model against a long short term memory neural network to find which is more effective for stock prediction. Both models' predictions are plotted with the actually movements of the stock to help visualize their performance.",
        StockGithub: "https://github.com/dgiletto/Stock_Prediction",
        StockWebsite: "https://github.com/dgiletto/Stock_Prediction",

        Music_RecommendationDesc:
            "Another personal project where I used a spotify dataset with the audio features of thousands of songs and employed a K-Nearest Neighbors model to give song recommendations based on a given track.",
        Music_recommendationGithub: "https://github.com/dgiletto/Music_Recommendation",
        Music_RecommendationWebsite: "https://github.com/dgiletto/Music_Recommendation"
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