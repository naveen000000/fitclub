import React from "react";
import image1 from "../../assets/sudhi side.jpg";
import image2 from "../../assets/sudhi ssb.jpg";
import image3 from "../../assets/sudhis back.jpg";
// import image4 from "../../assets/sudhi ddb.jpg";
import nb from '../../assets/nb.png';
import adidas from '../../assets/images-removebg-preview.png';
import nike from '../../assets/hrx_logo-removebg-preview.png';
import tick from "../../assets/tick.png";
import abi from "../../assets/coma-removebg-preview.png";
import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        {/* <img src={image4} alt="" /> */}
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>over 140+ expert coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partners</span>
          </div>
        </div>
        <span style={{color: "var(--gray)", fontWeight: "normal"}}>OUR PARTNERS</span>
        <div className="partners">
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
              <img src={abi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
