import React from 'react';
import iconDC from '../assets/icons/icon_DC.png';
import iconF from '../assets/icons/facebook.png';
import iconI from '../assets/icons/instagram.png';
import iconT from '../assets/icons/twitter.png';
import iconWB from '../assets/icons/icon_WB.png';
import iconX from '../assets/icons/icon_x.png';
import logoSaynaWhite from '../assets/logos/logo_sayna_white.png';
import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-text">
          <img src={iconWB} alt="warner bros icon" />
          <span>Ce projet respecte l’univers cinématographique de Superman</span>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">
            <img
              width="2%"
              src={logoSaynaWhite}
              alt="logo sayna"
              className="footer-logo"
            />
            <img
              src={iconX}
              alt="icon x"
              className="footer-logo"
            />
            <img
              width="2%"
              src={iconDC}
              alt="icon DC"
              className="footer-logo"
            />
          </a>
          <a href="#" className="social-icon">
            <img
              src={iconF}
              alt="facebook icon"
              className="hoveryellow"
            />
          </a>
          <a href="#" className="social-icon">
            <img
              src={iconI}
              alt="instagram icon"
              className="hoveryellow"
            />
          </a>
          <a href="#" className="social-icon">
            <img
              src={iconT}
              alt="twitter icon"
              className="hoveryellow"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;