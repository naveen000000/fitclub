import React from "react";
import "./Footer.css";
import wp from "../../assets/whatsapp-logo.jpg"

const Footer = () => {
  return (
    <>
    <div className="Footer-container" id="about">
    <section className="footer">
        <div className="box-container">
         
        <div className="box">
            <h3>Contact Us </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <i className="fa">
                <a href="/">638-555-2825 </a></i>  
                <br></br>
                <i className="fa">
                <a href="mailto:info.rambo@gmail.com">info@rambo.com</a></i>
            </div>
        <div className="box">
            <h3>Follow us</h3>
            <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                     />
                <div className="hero1">
                <h1>Reach us at</h1>
                 <div className="home__social-icon">
                 <a href="Facebook"><i className="fab fa-facebook-f"> Facebook</i></a>
                 <a href="Instagram"><i className="fab fa-instagram"> Instagram</i></a>
                 <a href=""><i className="fab fa-whatsapp">Whatsapp</i></a>
                 <a href="#home">
                <i className="#">--HOME--</i></a>
               </div>
            </div>
        </div> 
      </div>
    </section>
    <div className="credits">
        <p>© 2024 rambo. All Rights Reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
