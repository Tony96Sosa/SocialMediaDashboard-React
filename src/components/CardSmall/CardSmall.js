import React from 'react';
import './CardSmall.css';

const CardSmall = ({ title, socialIcon, socialName, socialNumber, growth }) => {
    return(
        <div className="card-small">
            <p className="card-small-views">{ title }</p>
            <p className="card-small-icon">
                <img src={ socialIcon } alt={ socialName } />
            </p>
            <p className="card-small-number">{ socialNumber }</p>
            <p className="card-small-percentage">
                <span>
                    <img src="images/icon-up.svg" alt={ growth }/>
                    { growth }
                </span>
            </p>
        </div>
    )
}

export default CardSmall;