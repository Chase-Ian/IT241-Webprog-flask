import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar archive-nav">
      <div className="nav-flex container">
        <div className="logo">Personal Profile</div>
        
        <ul className="nav-links">
          <li><a href="#home"><span className="nav-icon">🏠</span>HOME</a></li>
          <li><a href="#education"><span className="nav-icon">🎓</span>EDU</a></li>
          <li><a href="#projects"><span className="nav-icon">📁</span>WORK</a></li>
          <li><a href="#gallery"><span className="nav-icon">🖼️</span>PIX</a></li>
          <li><a href="#guestbook"><span className="nav-icon">💬</span>CHAT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;