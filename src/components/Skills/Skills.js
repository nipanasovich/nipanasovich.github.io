import React from 'react';
import SkillCard from './SkillCard';
import css from './logo/css.svg';
import html from './logo/html.svg';
import javascript from './logo/javascript.svg';
import react from './logo/react.svg';
import './Skills.css';

const logos = [css, html, javascript, react];

const Skills = ({skills, lang}) => { 
    return(
        <div className='skillBlock'>
            {
                skills.map((skill , i) => {
                    return (
                        <SkillCard 
                            src={logos[i]} 
                            name={skill.name}
                            text={lang === 'en' ? skill.textEn : skill.textRu} 
                            
                        />
                    );
                })
            }
        </div>
    );
}

export default Skills;