import React from 'react';
import './PopUp.css';
import mail from './img/gmail1.svg';

const PopUp = ({popUpChange, lang}) => {
    return(
        <div className='pop-up'>
            <div className='pop-up__window'>
                <p className='pop-up__text'>
                    {
                        lang === 'en' 
                        ? 'That\'s cool that you decided to look in here. I\'m looking forward for letter from you!' 
                        : 'Это круто что вы решили заглянуть сюда. Я очень жду сообщения от вас!'
                    }
                </p>
                <img src={mail} alt='mail'/>
                <span>nipanasovich@gmail.com</span>
                <a href="https://vk.com/nikita3tears" className='vk'><span>vkontakte</span></a>
                <a href="https://github.com/jintsuu" className='git'><span>GitHub</span></a>
                <a href="https://twitter.com/nikita3tears" className='tw'><span>Twitter</span></a>
                <button className='close-btn' onClick={popUpChange}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default PopUp;