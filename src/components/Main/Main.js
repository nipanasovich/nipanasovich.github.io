import React from 'react';
import img from './IMG_9727.JPG';
import MainEN from './MainEN';
import MainRU from './MainRU';
import './Main.css'

const Main = ({lang}) => {
    return(
        <div className='main__comp' >
            <div className='main__photo'>
                <img src={img} alt='Me' className='photo br-100' /> 
            </div>
            <div className='main__content'>
                { lang === 'en' ? <MainEN /> : <MainRU /> }
            </div>
        </div>     
    );
}

export default Main;
