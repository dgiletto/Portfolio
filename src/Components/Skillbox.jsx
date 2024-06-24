import React from "react";
import {
    FaReact,
    FaGitAlt,
    FaGithub,
    FaNpm,
    FaHtml5,
    FaLinux,
    FaPython,
    FaJava,
    FaBootstrap
} from 'react-icons/fa';
import { SiCss3, SiCplusplus, SiC } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const Skillbox = ({ skill }) => {
    const icon = {
        HTML: <FaHtml5 />,
        CSS: <SiCss3 />,
        Javascript: <DiJavascript1 />,
        React: <FaReact />,
        Bootstrap: <FaBootstrap />,
        Npm: <FaNpm />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Linux: <FaLinux />,
        Python: <FaPython />,
        Java: <FaJava />,
        "C++": <SiCplusplus />,
        C: <SiC />
    };

    return (
        <div title={skill} className="SkillBox">
            {icon[skill]}
        </div>
    );
};

export default Skillbox;