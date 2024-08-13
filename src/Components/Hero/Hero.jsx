import React from 'react';
import './Hero.css';
import hero_image from '../../assets/sudhi_coverr-removebg-preview.png';
import hero_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';
import Header from '../Header/Header';

const Hero = ({ onJoinNowClick }) => {
  const transition = { duration: 3, type: 'spring' };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        <div className="the-best">
          <motion.div
            initial={{ left: mobile ? '178px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to the fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={878} delay={4} preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} delay={2} preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-btns">
          <button className="btn">
            <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>Get Started</a>
          </button>
          <button className="btn">
            <a href="#programs" style={{ color: 'inherit', textDecoration: 'none' }}>Learn More</a>
          </button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn" onClick={onJoinNowClick}>
          Join now
        </button>

        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img className="hero-img" src={hero_image} alt="" />
        <motion.img
          initial={{ right: mobile ? '11rem' : '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          className="hero-back"
          src={hero_back}
          alt=""
        />

        <motion.div
          initial={{ right: '32rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>250 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
