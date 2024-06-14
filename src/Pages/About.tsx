import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

function About() {
    return (
        <div className="AboutPage">
            <div className="AboutText">
                <h1 className="AboutTextHeading">
                    Get to <b>Know</b> Me!
                </h1>
                <p>
                    Hello, my name is <b>Dylan Giletto</b> and I am from Burlington Township, 
                    New Jersey. I am a senior at the <b>University of Delaware</b> pursuing
                    a BS in Computer Science with a concentration in <b>data science</b>.
                    <br />
                    <br />
                    I have a strong passion in developing <b>machine learning</b> programs
                    and have advanced knowledge in the many different algorithms of machine
                    learning. I enjoy analyzing and manipulating data to predict outcomes or 
                    detect patterns.
                    <br />
                    <br />
                    I also love to do <b>software design</b>, both front and backend as showcased
                    on this website. I like to develop software to look smooth and pleasing
                    to the eye. I majorly use react for projects like this, but I am also
                    open to learning and using new libraries for developing software.
                    <br />
                    <br />
                    I am looking for new collaborations and work opportunities and would like 
                    to hear from you! I thrive working within teams and strive to be a leader
                    at all chances I get. Please reach out to me and download my resume below!
                </p>
                <a href="Dylan_Giletto_Resume.pdf" download className="resume-btn">
                    <button>
                        Download Resume <FaFileDownload />
                    </button>
                </a>
            </div>
        </div>
    );
}

export default About;