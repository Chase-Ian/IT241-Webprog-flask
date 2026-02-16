import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-flex container">
        <div className="logo">PLAYER_1</div>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#education">EDU</a></li>
          <li><a href="#projects">WORK</a></li>
          <li><a href="#gallery">PIX</a></li>
          <li><a href="#guestbook">CHAT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;