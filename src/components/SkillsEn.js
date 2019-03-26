import React from 'react';

const SkillsEn = () => {
    return(
        <div className="skills">
            <div className="skills__html skills__item">
                <h3 className="skills__heading">HTML</h3>
                <p className="skills__text">
                    I've studied semantic HTML5's tags and can apply it in work.
                    Use BEM-metodology for naming classes.
                </p>
            </div>
            <div className="skills__css skills__item">
                <h3 className="skills__heading">CSS</h3>
                <p className="skills__text">
                    Studied CSS, can work with animations on basic level.
                    I've learned about media-queries and flexbox and use it to create responsive web-pages.
                    Learned SASS preprocessor and use scss-syntax and 7-1 pattern on practice.
                </p>
            </div>
            <div className="skills__javascript skills__item">
                <h3 className="skills__heading">JavaScript</h3>
                <p className="skills__text">
                    I've studied basics of JavaScript. Know how interact call stack, 
                    Web APIS, task queue and event loop.
                    I understand how callbacks are handled.
                    Learned about promises and fetch API, and differences between axios.js and fetch API.
                    I know ES6, ES7. On basic level have studied classes and prototypes, 
                    also closures and specificities of "this" keyword.
                </p>
            </div>
            <div className="skills__other skills__item">
                <h3 className="skills__heading">Other Skills</h3>
                <p className="skills__text">
                    On basic level learned about React and Vue frameworks, HTTP-protocol and REST-architecture.
                    Can work with npm-packages and git. 
                    Have some experience with Linux. 
                    English on pre-intermediate - intermediate level. 
                </p>
            </div>
        </div>
    );
}

export default SkillsEn;