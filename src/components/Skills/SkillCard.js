import React from 'react';


const SkillCard = ({name, src, text}) => { 
    return(
        <div className='skillCard'>
            <img src={src} alt='skillLogo' className={name}/>
            <h2>{name}</h2>
            <p>{text}</p>
        </div>
    );
}

export default SkillCard;