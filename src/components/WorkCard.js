import React from 'react';

import git from '../img/github-color.svg';

const WorkCard = ({ lang, id, name, description, link, image }) => {
    return(
        <div className="card" id={`card-${id}`}>
            <div className="card__img--wrapper">
                <img src={image} alt={`Work number ${id}`} className="card__img"/>
            </div>
            <div className="card__description">
                <h3 className="card__name">{ name }</h3>
                <p className="card__text">{ description }</p>
                <div className="card__link--wrapper">
                    <p className="card__link--description">
                        { lang === "EN" 
                            ? "Web-page code:"
                            : "Код страницы:"
                        }
                    </p>
                    <a 
                        href={ link } 
                        className="card__link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img className="card__link--img" src={ git } alt="Git Link" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;