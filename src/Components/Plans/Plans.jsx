import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: '2rem' }}>
        <span className="stroke-text">Ready to Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">now with us</span>
      </div>
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>₹ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="White Tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="btn">
              <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                Join now
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
