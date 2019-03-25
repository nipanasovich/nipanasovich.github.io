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
                        <ul className="info__list">
                            <li className="info__fullname info__text">Полное имя: Панасович Никита Игоревич</li>
                            <li className="info__birthday info__text">День рождения: 5 Декабря 1999</li>
                            <li className="info__nationality info__text">Гражданство: Беларусь</li>
                            <li className="info__residence info__text">Место проживания: Санкт-Петербург</li>
                        </ul>
                    </div>
                    <div className="info__education">
                        <h3 className='info__education-heading heading--3'>Образование</h3>
                        <ul className="info__list">
                            <li className="info__university info__text">Санкт-Петербургский Государственный Электротехнический Университет</li>
                            <li className="info__speaciality info__text">Специальность: Управление в технических системах</li>
                            <li className="info__course info__text">Курс: 2</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="info__briefly ">
                <h3 className="heading--3">Коротко обо мне</h3>
                <p className='info__briefly--text'>
                    Начинающий, увлеченный, целеустремленный разработчик без опыта.
                    В свободное время читаю и перевожу статьи посвященные веб-разработке, некоторый из них публикую на habr'е. 
                    Постоянно стараюсь улучшать свои навыки во всех областях, начиная разработкой и заканчивая повседневнными вещами.
                    Считаю, что залог продуктивного дня - это начать его с раннего утра. 
                    
                </p>
            </div>
        </div>
    );
}

export default AboutMeRu;