import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../assets/maldivesVideo.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Welcome to Paradise</h1>
                <h2>VAYU~LIVIN</h2>
                <h3>Grahan</h3>
                
            </div>
        </div>
    )
}

export default Hero
