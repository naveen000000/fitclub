import React, { useState } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Join from './Components/Join/Join';
import Contact from './Components/Contact/Contact';
import LoginSignup from './Components/LoginSignup/LoginSignup'; // Import the LoginSignup component

function App() {
  const [showLoginSignup, setShowLoginSignup] = useState(false);

  const handleJoinNowClick = () => {
    setShowLoginSignup(true);
  };

  return (
    <div className="App">
      {showLoginSignup ? (
        <LoginSignup />
      ) : (
        <>
          <Hero onJoinNowClick={handleJoinNowClick} />
          <Programs />
          <Reasons />
          <Plans />
          <Testimonials />
          <Join />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
