import React from 'react';
import './Card.css';

const Card = ({ username, socialIcon, followers, todayFollowers,socialName }) => {
    const lineColor = `card ${socialName}`;
    return(
        <article className={ lineColor }>
            <p className="card-title">
                <img src={ socialIcon } alt="Facebook" />
                { username }
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{ followers }</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="images/icon-up.svg" alt={ socialName } />
                { todayFollowers }
            </p>
        </article>
    )
}

export default Card;