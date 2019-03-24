import React from 'react';

const Preloader = ({ isLoaded }) => {
    return(
        <div className={isLoaded ? "hidden" : "preloader__wrapper" }>
            <div className="preloader loading">
                <span className="slice"></span>
                <span className="slice"></span>
                <span className="slice"></span>
                <span className="slice"></span>
                <span className="slice"></span>
                <span className="slice"></span>
            </div>
        </div>
    );
}

export default Preloader