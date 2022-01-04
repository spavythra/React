import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };
  return (
    <nav>
      <Link to='/'>
        <h1 style={navStyle}>Visit Finland</h1>
        </Link>
        
            <ul className="nav-links">
              <Link to='/vaasa'>
              <li style={navStyle}>Vaasa</li>
              </Link>
              <Link to='/jyvaskyla'>
              <li style={navStyle}>Jyväskylä</li>
              </Link>
              <Link to='/rovaniemi'>
              <li style={navStyle}>Rovaniemi</li>
              </Link>
            
            </ul>
    
    </nav>
  );
}

export default Nav;