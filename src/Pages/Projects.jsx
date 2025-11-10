import React from 'react';
import { ProjectCard } from '../Components/ProjectCard.js';
import projImg1 from '../Images/projImg1.png';
import projImg2 from '../Images/projImg2.png';
import projImg3 from '../Images/projImg3.jpg';
import projImg4 from '../Images/projImg4.jpeg';
import projImg5 from '../Images/projImg5.png';
import projImg6 from '../Images/projImg6.png';

export const Projects = () => {
    return (
        <div>
            <h1 className="projectHeading">
                My <b>Projects</b>
            </h1>
            <div className="project">
                <ProjectCard photo={projImg1} title="Stock_Forecast" />
                <ProjectCard photo={projImg2} title="PCMart" />
                <ProjectCard photo={projImg3} title="Music_Recommendation" />
                <ProjectCard photo={projImg4} title="Rainfall_Prediction" />
                <ProjectCard photo={projImg5} title="Trakr" />
                <ProjectCard photo={projImg6} title="CoreSync" />
            </div>
        </div>
    )
}

export default Projects;