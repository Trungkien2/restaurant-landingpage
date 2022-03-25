import React from 'react';

import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi'
import {FooterOverlay,Newsletter} from '../../components'
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => (
  <div className='footer section__padding'>
    <FooterOverlay/>
    <Newsletter/> 

    <div className="footer-links">
      <div className="footer-links__contact">
        <h1 className="footer-headtext">Contact US</h1>
        <p className="p__opensans">9 W 53rd st, New york, NY 10019, USa</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="footer-links__logo">
    <img src={images.gericht} alt="logo" />
    <p className="p__opensans">" The best way to find yourself is to lose yourself in the service of others"</p>
    <img src={images.spoon} alt="spoon" style={{marginTop : 15}} />
    <div className="footer-links-icons">
      <FiFacebook/>
      <FiInstagram/>
      <FiTwitter/>
    </div>
      </div>
      <div className="footer-links__work">
      <h1 className="footer-headtext">Working hours</h1>
        <p className="p__opensans">Monday - Friday : </p>
        <p className="p__opensans">08:00am - 12:00am</p>
        <p className="p__opensans">saturday - sunday</p>
        <p className="p__opensans">07:00am - 11:00pm</p>
      </div>
    </div>

    <div className="footer__copyRight">
      <p className="p__opensans">2022 Gericht. All right reserved.</p>
    </div>
  </div>
);

export default Footer;
