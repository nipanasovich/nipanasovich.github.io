import React from 'react';
import './Lang.css';


const Lang = ({langChange}) => {
    return (
        <div className="lang">
            <button className='btn en active' onClick={() => langChange('en')}>EN</button>
            <button className='btn ru' onClick={() => langChange('ru')}>RU</button>
        </div>
    );
}

export default Lang;