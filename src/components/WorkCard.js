import React from 'react';

const WorkCard = ({ id, name, description, link, image }) => {
    return(
        <div className="card">
            <div className="card__img--wrapper">
                <img src={image} alt={`Work number ${id}`} className="card__img"/>
            </div>
            <div className="card__description">
                <h3 className="card__name">{ name }</h3>
            </div>
        </div>
    );
}

export default WorkCard;