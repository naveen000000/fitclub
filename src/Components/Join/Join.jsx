import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const handleJoin = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_jqn5flv', 'template_5fbt3fr', form.current, 'ddYcz13MvW01UFF5u')
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form className="email-container" ref={form} onSubmit={handleJoin}>
          <input type="email" name="user_email" placeholder="Enter Email Address" required />
          <button type="submit" className="btn btn-j">
            <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>
              Join now
            </a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
