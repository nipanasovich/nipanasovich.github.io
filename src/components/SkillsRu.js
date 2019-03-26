import React from 'react';

const SkillsRu = () => {
    return(
        <div className="skills">
            <div className="skills__html skills__item">
                <h3 className="skills__heading">HTML</h3>
                <p className="skills__text">
                    Изучил семантические теги HTML5 и умею их применять.
                    При верстке использую методологию BEM для именования классов.
                </p>
            </div>
            <div className="skills__css skills__item">
                <h3 className="skills__heading">CSS</h3>
                <p className="skills__text">
                    Изучил CSS, умею работать с анимацией на базовом уровне.
                    Научился работать с медиа-запросами и flexbox, а также делать адаптив для сайта при помощи них.
                    Изучил препроцессор SASS и использую на практике scss-синтаксис.
                    При написании scss-кода использую архитектуру 7-1.
                </p>
            </div>
            <div className="skills__javascript skills__item">
                <h3 className="skills__heading">JavaScript</h3>
                <p className="skills__text">
                    Изучил основы JavaScript. Знаю как взаимодействуют стек вызовов, 
                    Web APIS, очередь задач и обработчик событий.
                    Понимаю как обрабатываются коллбэки. 
                    Изучил работу промисов и fetch API, а также различии axios.js и fetch API.
                    Знаю ES6, ES7. На базовом уровне изучил классы и прототипы, 
                    а также замыкания и особенности использования this.
                </p>
            </div>
            <div className="skills__other skills__item">
                <h3 className="skills__heading">Прочие навыки</h3>
                <p className="skills__text">
                    На базовом уровне изучил фреймворки React и Vue, HTTP-протокол и REST-архитектуру.
                    Умею работать с npm-пакетами и git'ом. Имею немного опыта в работе с Linux. 
                    Английский на уровне pre-intermediate - intermediate. 
                </p>
            </div>
        </div>
    );
}

export default SkillsRu;