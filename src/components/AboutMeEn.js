import React from 'react';
import photo from '../img/photo.jpg';

const AboutMeEn = () => {
    return (
        <div className='about-me' id="about-me-link">
            <h2 className="about-me__heading">About Me</h2>
            <div className="about-me__wrapper">
                <div className='about-me__photo'>
                    <img src={photo} alt="Me" />
                </div>
                <div className="about-me__info">
                    <div className="info__personal">
                        <h3 className="info__born-heading heading--3">Personal Infomation</h3>
                        <p className="info__fullname info__text">Full Name: Nikita Panasovich</p>
                        <p className="info__birthday info__text">Birthday: December 5, 1999</p>
                        <p className="info__nationality info__text">Nationality: Belarusian</p>
                        <p className="info__residence info__text">Residence: Russia, St.Petersburg</p>
                    </div>
                    <div className="info__education">
                        <h3 className='info__education-heading heading--3'>Education</h3>
                        <p className="info__university info__text">St.Petersburg Electrotechnical University</p>
                        <p className="info__speciality info__text">Speciality: Control in Technical Systems</p>
                        <p className="info__course info__text">Course: 2</p>
                    </div>
                    
                </div>
            </div>
            <div className="info__briefly ">
                <h3 className="heading--3">Briefly about me</h3>
                <p className='info__briefly--text'>
                    Goal-oriented, enthusiastic beginner developer without experience.
                    In leisure time I'm reading articles about web-development and translate them into russian language, some of them publish on habr.ru
                    Always trying to improve my skills, not only in web-development but also in my daily affairs.
                    I think that productive day is the day that began in early morning. 
                    
                </p>
            </div>
        </div>
    );
}

export default AboutMeEn;