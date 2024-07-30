import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id ='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" className="logo" />
            <p>UCLA is the best school in the world when it comes to food. Be sure to get yours with Delicious Delivery.</p>
            <div>
            </div>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>299-243-9594</li>
                <li>deliciousdelivery@food.com</li>
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
