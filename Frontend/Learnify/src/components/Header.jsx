import React from "react";

const Header = () => (
  <header>
    <div className="logo">Learnify</div>
    <nav className="nav-links">
      <a href="#">Home</a>
      <a href="book.html">Books</a>
      <a href="pdf.html">PDFs</a>
      <a href="aboutus.html">About Us</a>
    </nav>
    <div className="search-bar">
      <input type="text" placeholder="Search for topics..." />
      <button type="button">Search</button>
    </div>
    <div className="auth-buttons">
      <a href="login.html">Log In</a>
      <a href="signup.html">Sign Up</a>
    </div>
  </header>
);

export default Header;
