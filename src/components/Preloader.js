import React from 'react';

const Preloader = ({isLoaded}) => {
    return(
        <div className={isLoaded ? "hidden" : "preloader loading"}>
            <span className="slice"></span>
            <span className="slice"></span>
            <span className="slice"></span>
            <span className="slice"></span>
            <span className="slice"></span>
            <span className="slice"></span>
        </div>
    );
}

export default Preloader