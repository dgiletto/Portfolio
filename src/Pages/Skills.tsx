import React from 'react';
import Skillbox from "../Components/Skillbox.jsx"

function Skills() {
    return (
        <>
            <h1 className="SkillsHeading">Skillset</h1>
            <div className="skills">
                <Skillbox skill="HTML" />
                <Skillbox skill="CSS" />
                <Skillbox skill="Javascript" />
                <Skillbox skill="React" />
                <Skillbox skill="Bootstrap" />
                <Skillbox skill="Npm" />
                <Skillbox skill="Git" />
                <Skillbox skill="Github" />
                <Skillbox skill="Linux" />
                <Skillbox skill="Python" />
                <Skillbox skill="Java" />
                <Skillbox skill="C++" />
                <Skillbox skill="C" />
            </div>
        </>
    );
}

export default Skills;