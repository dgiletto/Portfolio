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
        Music_RecommendationWebsite: "https://github.com/dgiletto/Music_Recommendation",

        Rainfall_PredictionDesc:
            "Rainfall prediction classifier which uses features such as temperature, wind speed, cloud cover, etc. to determine if it will rain tomorrow. Within the project is a notebook which compares an XGB classifier, Support Vector Classifier, and a Logistic Regressor to see which has the best performance. I then picked one of the models (The Support Vector Classifier) and created a website where users can enter features to determine if it will rain the next day or not!",
        Rainfall_PredictionGithub: "https://github.com/dgiletto/Rain_Prediction",
        Rainfall_PredictionWebsite: "https://venerable-lily-35c7fc.netlify.app/",

        TrakrDesc:
            "Subscription Tracker which users can log in and store their current subscriptions on the dashboard. They can visualize and filter the subscriptions they are currently paying for!",
        TrakrGithub: "https://github.com/dgiletto/Subscription_Tracker",
        TrakrWebsite: "https://subscription-trakr.netlify.app/"
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