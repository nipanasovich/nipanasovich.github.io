import React from 'react';
import photo from '../img/photo.jpg';

const AboutMeRu = () => {
    return (
        <div className='about-me' id="about-me-link">
            <h2 className="about-me__heading">Обо Мне</h2>
            <div className="about-me__wrapper">
                <div className='about-me__photo'>
                    <img src={photo} alt="Me" />
                </div>
                <div className="about-me__info">
                    <div className="info__personal">
                        <h3 className="info__born-heading heading--3">Персональные данные</h3>
                        <p className="info__fullname info__text">Полное имя: Панасович Никита Игоревич</p>
                        <p className="info__birthday info__text">День рождения: 05.12.1999</p>
                        <p className="info__nationality info__text">Гражданство: Беларусь</p>
                        <p className="info__living-place info__text">Место проживания: Санкт-Петербург</p>
                    </div>
                    <div className="info__education">
                        <h3 className='info__education-heading heading--3'>Образование</h3>
                        <p className="info__university info__text">Санкт-Петербургский Государственный Электротехнический Университет</p>
                        <p className="info__speaciality info__text">Специальность: Управление в технических системах</p>
                        <p className="info__year info__text">Курс: 2</p>
                    </div>
                    
                </div>
            </div>
            <div className="about-me__briefly-info ">
                <h3 className="heading--3">Коротко обо мне</h3>
                <p className='about-me__briefly-info--text'>
                    
                </p>
            </div>
        </div>
    );
}

export default AboutMeRu;