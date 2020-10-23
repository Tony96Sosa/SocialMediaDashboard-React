import React from 'react';
import Card from '../Card/Card';

const TopCardList = () => {
    const cardInfo = [
        {
            id: 1,
            username: '@tony96sosa',
            socialIcon: "images/icon-facebook.svg",
            followers: 245,
            todayFollowers: "12 Today",
            socialName: 'facebook',
        },
        {
            id: 2,
            username: '@tony96sosa',
            socialIcon: "images/icon-twitter.svg",
            followers: 51,
            todayFollowers: "12 Today",
            socialName: 'twitter',
        },
        {
            id: 3,
            username: '@tony96sosa',
            socialIcon: "images/icon-instagram.svg",
            followers: 301,
            todayFollowers: "12 Today",
            socialName: 'instagram',
        },
        {
            id: 4,
            username: '@tony96sosa',
            socialIcon: "images/icon-youtube.svg",
            followers: 10,
            todayFollowers: "12 Today",
            socialName: 'youtube',
        },
    ]
    return(
        <section className="top-cards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardInfo.map( (Info) => <Card key={ Info.id } {...Info}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default TopCardList;