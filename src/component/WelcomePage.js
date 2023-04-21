import React from 'react';

import { Link } from 'react-router-dom';
import App from '../App';

function WelcomePage() {
  return (
    <div className="welcome-page">
      <h1>Welcome to our Food Delivery Site</h1>
      <p>Get your favorite food delivered right to your doorstep in no time!</p>
      <Link to={App}>
      <button className="btn">Order Now</button>
      </Link>

    </div>
  );
}

export default WelcomePage;