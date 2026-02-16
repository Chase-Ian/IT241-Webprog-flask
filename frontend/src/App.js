import React from 'react';
import './css/style.css'; // Always keep CSS imports
import Guestbook from './Guestbook'; // This is the neighbor in src/
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      {/* 1. The Navbar stays at the top */}
      <Navbar />

      <div className="container">
        {/* 2. All your components go here in order */}
        <Home />
        <Education />
        <Projects />
        <Gallery />
        
        {/* 3. The Guestbook goes at the bottom */}
        <hr />
        <section id="guestbook">
          <Guestbook />
        </section>
      </div>

      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px' }}>
        <p>© 2026 My Personal Profile</p>
      </footer>
    </div>
  );
}

export default App;