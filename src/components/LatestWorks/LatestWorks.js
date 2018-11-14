import React from 'react';

const LatestWorks = ({lang}) => {
    return (
        <div>
            { lang === 'en' ? <h2 className='latest-works__h'>Latest works</h2>: <h2 className='latest-works__h'>Последние работы</h2> } 
        </div> 
    );
}

export default LatestWorks;