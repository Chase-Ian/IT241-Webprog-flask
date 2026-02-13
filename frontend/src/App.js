import React from 'react';
import Guestbook from './Guestbook';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>My Personal Profile</h1>
        <p>Welcome to my corner of the internet!</p>
      </header>
      
      <main>
        <section style={{ marginBottom: '40px' }}>
          <h2>About Me</h2>
          <p>Hi! I'm a developer building cool things with Flask and React.</p>
        </section>

        <section>
          <Guestbook />
        </section>
      </main>
    </div>
  );
}

export default App;