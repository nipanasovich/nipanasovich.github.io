import React from 'react';

import WorkCard from './WorkCard';

import { works } from "../works";

const LatestWorks = ({ lang, changeCard }) => {
    return(
        <div className="latest-works">
            <button 
                className="latest-works__btn latest-works__btn--left" 
                onClick={ () => changeCard("left", works.length) }
            ></button>
            <div className="latest-works__items">
                {
                    works.map( item => {
                        return (
                            <WorkCard 
                                id={ item.id }
                                key={ item.id } 
                                name={ item.name } 
                                description={ lang === "EN" ? item.descriptionEN :  item.descriptionRU }
                                gitLink={ item.gitLink } 
                                image={ item.img }
                                lang={ lang }
                                link={ item.link }
                            />
                        );
                    } )
                }
            </div>
            <button 
                className="latest-works__btn latest-works__btn--right" 
                onClick={ () => changeCard("right", works.length) }
            ></button>
        </div>
    );
}

export default LatestWorks;