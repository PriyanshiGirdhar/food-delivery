import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
      <img src={assets.logo} alt=''/>
      <p>
      A menu is a detailed list of options othey come to eat or drink at the restaurant or bar. They offer a wide variety of choices, and are priced differently based on the ingredients used, time taken to cook the dishes, or the season and availability of ingredients used.
      </p>
      <div className="footer-social-icons">
      
        <img src={assets.facebook_icon}alt=''/>
        <img src={assets.twitter_icon} alt=''/>
         <img src={assets.linkedin_icon} alt=''/>
      </div>
      </div>
        <div className="footer-content-centre">
<h2>COMPANY</h2>
<ul>
    <li>
        Home
    </li>
<li>About Us</li>
<li>Delivery</li>
<li>
    Privacy Policy
</li>
</ul>
        </div>
        <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>
+1-8999-877
    </li>
    <li>
contactat abc@gmail.com
    </li>
</ul>
        </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024  Tomato.com-All Right are reserved</p>
    </div>
  )
}

export default Footer
