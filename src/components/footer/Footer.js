import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>Vayu~Livin.</h3>
                    <div className="social">
                       
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                   
                    <div className="right">
                        <ul>
                            <li>© 2022 |<b> Vayulivin Anupam Suresh </b>|
                                 All Rights Reserved with Copyright & TradeMarks</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
