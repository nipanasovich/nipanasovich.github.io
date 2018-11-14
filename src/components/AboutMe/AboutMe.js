import React from 'react';
import MapContainer from './MapContainer';
import AboutMeRU from './AboutMeRU';
import AboutMeEN from './AboutMeEN';
import './AboutMe.css';

const AboutMe = ({lang}) => {
    return(
        <div className='about-me__comp'>
            { lang === 'en' ? <h2 className='about-me__h'>About Me</h2>: <h2 className='about-me__h'>Обо мне</h2> } 
            <div className='about-me__content'>
                { lang === 'en' ? <AboutMeEN /> : <AboutMeRU /> }
                <div className='map shadow-5'>
                    <MapContainer  /> 
                </div>
            </div>
        </div>
    );
}

export default AboutMe

