import React from 'react';

import WorkCard from './WorkCard';

import { works } from "../works";

const LatestWorks = ({ lang, cardId, changeCard }) => {
    return(
        <div className="latest-works">
            <button 
                className="latest-works__btn latest-works__btn--left" 
                onClick={ () => changeCard("left", works.length) }
            ></button>
            <WorkCard 
                id={ works[cardId].id } 
                name={ works[cardId].name } 
                description={ lang === "EN" ? works[cardId].descriptionEN :  works[cardId].descriptionRU }
                link={ works[cardId].gitLink } 
                image={ works[cardId].img }
            />
            <button 
                className="latest-works__btn latest-works__btn--right" 
                onClick={ () => changeCard("right", works.length) }
            ></button>
        </div>
    );
}

export default LatestWorks;