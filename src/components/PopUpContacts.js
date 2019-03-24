import React from 'react';
import phone from '../img/phone-call.svg';
import mail from '../img/gmail.svg';
import link from '../img/link.svg';
import git from '../img/github.svg';

const PopUpContacts = ({lang, isPopUpOpened, popUpSwitch}) => {
    return(
        <div className={isPopUpOpened ? "pop-up-contacts" : "pop-up-contacts--disabled"}>
            <div className="pop-up-contacts__wrapper">
                <h2 className="pop-up-contacts__heading">{lang === "EN" ? "My Contacts" : "Мои Контакты"} </h2>
                <p className="pop-up-contacts__text">
                    { lang === "EN"
                        ? "I'm very greatful that you wanna contact with me. Choose more convenient option for yourself:"
                        : "Я очень признателен вам, за то, что вы решили связаться со мной. Выберите наиболее подходящий вариант для вас:"
                    }
                </p>

                <ul className="pop-up-contacts__list">
                    <li className="pop-up-contacts__list--item">
                        <img src={phone} alt="My phone number" className="pop-up-contacts__list--image" />
                        <a href="tel:89996685219">8(999)668-52-19</a>
                    </li>
                    <li className="pop-up-contacts__list--item">
                        <img src={mail} alt="My email" className="pop-up-contacts__list--image" />
                        <a href="mailto: nipanasovich@gmail.com">nipanasovich@gmail.com</a>
                    </li>
                </ul>

                <h3 className="pop-up-contacts__heading--3">{ lang === "EN" ? "Other links" : "Другие ссылки" }</h3>
                <ul className="pop-up-contacts__list--other-links">
                    <li className="pop-up-contacts__list--item-other">
                        <a href="https://habr.com/ru/users/jintsuu/" target="_blank" rel="noopener noreferrer">
                            <img src={link} alt="Other link 1" className="pop-up-contacts__list--image-other" />
                        </a>
                        <span className="pop-up-contacts__list--description">habr</span>
                    </li>
                    <li className="pop-up-contacts__list--item-other" >
                        <a href="https://spb.hh.ru/resume/bab05646ff0631cf0c0039ed1f6668716f4e30" target="_blank" rel="noopener noreferrer">
                            <img src={link} alt="Other link 2" className="pop-up-contacts__list--image-other" />
                        </a>
                        <span className="pop-up-contacts__list--description">headhunter</span>
                    </li>
                    <li className="pop-up-contacts__list--item-other" >
                        <a href="https://github.com/jintsuu" target="_blank" rel="noopener noreferrer">
                            <img src={git} alt="Other link 3" className="pop-up-contacts__list--image-other" />
                        </a>
                        <span className="pop-up-contacts__list--description">github</span>
                    </li>
                </ul>

                <button className="pop-up-contacts__button-close" onClick = {() => popUpSwitch()}></button>
                
            </div>
        </div>
    );
}

export default PopUpContacts;