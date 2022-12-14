import React from 'react';
import { Link } from 'react-router-dom';

function Head() {
  <div className="head">
    <div className="logo">
      <Link to="/" className="head-link">
        <h2>Welcome, Uniting The Wolrd !</h2>
      </Link>
    </div>

    <div className="world">
      <i className="fa-duotone fa-earth-americas" aria-hidden="true" />
      {' '}
      <span> The Globe</span>
    </div>
  </div>;
}

export default Head;
