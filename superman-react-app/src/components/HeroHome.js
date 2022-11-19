import React from 'react';
import logoDC from '../assets/logos/logoDC.png';
import '../styles/heroHome.css';

function HeroHome() {
  return (
    <section id="hero">
      <div className="hero-image">
        <div className="container">
          <div>
            <img src={logoDC} alt="logo DC" className="hero-img" />
          </div>
          <h1 className="hero-title text-uppercase"><span className="title">superman</span><br /> <span>l'homme d'acier</span></h1>
        </div>
      </div>
    </section>
  )
}

export default HeroHome;