import React from 'react';
import { ProjectCard } from '../Components/ProjectCard.js';
import projImg1 from '../Images/projImg1.jpg';
import projImg2 from '../Images/projImg2.png';
import projImg3 from '../Images/projImg3.jpg';

export const Projects = () => {
    return (
        <div>
            <h1 className="projectHeading">
                My <b>Projects</b>
            </h1>
            <div className="project">
                <ProjectCard photo={projImg1} title="Stock" />
                <ProjectCard photo={projImg2} title="PCMart" />
                <ProjectCard photo={projImg3} title="Music_Recommendation" />
            </div>
        </div>
    )
}

export default Projects;