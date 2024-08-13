import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            <img src={program.image} alt={program.heading} />
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
