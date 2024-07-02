import React from 'react';
import './main.css';
import NavBar from '../components/navBar.js';
import Footer from '../components/footer.js';

function Main() {
  return (
    <div className="Main">
      <NavBar />
      <text className="Main-content">
        <h1>Welcome to Our Company</h1>
        <p>This is the main content of the page.</p>
      </text>
      <Footer />
    </div>
  );
}

export default Main;