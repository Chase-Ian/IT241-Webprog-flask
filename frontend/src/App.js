import React, { useState, useEffect } from 'react';
import './css/style.css'; 
import Guestbook from './Guestbook'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Gallery from './components/Gallery';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This simulates the "Connecting..." phase
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds of loading
    return () => clearTimeout(timer);
  }, []);

  // --- 1. THE LOADING SCREEN ---
  if (loading) {
    return (
      <div className="ba-loader-screen">
        <div className="loader-content">
          <div className="ba-halo loader-halo"></div>
          <h1 className="loading-text">CONNECTING...</h1>
          <div className="loading-bar-container">
            <div className="loading-bar-fill"></div>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. THE ACTUAL SITE (Fades in after loading) ---
  return (
    <div className="animate-fade-in">
      {/* The Navbar stays at the top */}
      <Navbar />

      <div className="container">
        {/* All your components go here in order */}
        <Home />
        <Education />
        <Projects />
        <Gallery />
        
        {/* The Guestbook goes at the bottom */}
        <hr />
        <section id="guestbook">
          <Guestbook />
        </section>
      </div>

      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px', fontFamily: '"Press Start 2P", cursive', fontSize: '10px' }}>
        <p>© 2026 My Personal Profile</p>
      </footer>
    </div>
  );
}

export default App;