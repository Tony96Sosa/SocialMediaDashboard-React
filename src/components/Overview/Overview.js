import React from 'react';
import CardSmall from '../CardSmall/CardSmall';
import './Overview.css';

const Overview = () => {
const cardSmallInfo = [
    {
        id: 1,
        title: 'Page Views',
        socialIcon: "images/icon-facebook.svg",
        socialName: 'facebook',
        socialNumber: '87',
        growth: "3%",
    },
    {
        id: 2,
        title: 'Likes',
        socialIcon: "images/icon-facebook.svg",
        socialName: 'facebook',
        socialNumber: '52',
        growth: "2%",
    },
    {
        id: 3,
        title: 'Likes',
        socialIcon: "images/icon-instagram.svg",
        socialName: 'instagram',
        socialNumber: '5462',
        growth: "2257%",
    },
    {
        id: 4,
        title: 'Profile Views',
        socialIcon: "images/icon-instagram.svg",
        socialName: 'instagram',
        socialNumber: '52K',
        growth: "1375%",
    },
    {
        id: 5,
        title: 'Retweets',
        socialIcon: "images/icon-twitter.svg",
        socialName: 'twitter',
        socialNumber: '117',
        growth: "303%",
    },
    {
        id: 6,
        title: 'Likes',
        socialIcon: "images/icon-twitter.svg",
        socialName: 'twitter',
        socialNumber: '507',
        growth: "553%",
    },
    {
        id: 7,
        title: 'Likes',
        socialIcon: "images/icon-youtube.svg",
        socialName: 'youtube',
        socialNumber: '107',
        growth: "19%",
    },
    {
        id: 8,
        title: 'Total Views',
        socialIcon: "images/icon-youtube.svg",
        socialName: 'youtube',
        socialNumber: '1407',
        growth: "12%",
    }
    
]
    return(
        <section className="overview">
            <div className="wrapper">
                <h2 className="">Overview - Today</h2>
                <div className="grid">
                    {
                        cardSmallInfo.map( (info) => <CardSmall key={info.id} {...info} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Overview;