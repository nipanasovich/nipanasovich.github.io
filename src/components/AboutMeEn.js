import React from 'react';
import photo from '../img/photo.jpg';

const AboutMeEn = () => {
    return (
        <div className='about-me' id="about-me-link">
            <h2 className="about-me__heading">About Me</h2>
            <div className='about-me__photo'>
                <img src={photo} alt="Me" />
            </div>
            <div className="about-me__info">
                <div className="info__education">
                    <a href="http://www.etu.ru">St.Petersburg Eletrotechnical Unviresity</a>
                </div>
            </div>
        </div>
    );
}

export default AboutMeEn;