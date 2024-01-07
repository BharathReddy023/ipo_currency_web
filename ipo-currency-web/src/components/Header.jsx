import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">aboutPage</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/register">register</Link></li>
                <li><Link to="/login">Loginpage</Link></li>
                <li><Link to='/ipo-calender'>IPO-calender</Link></li>

            </ul>
        </nav>
    </header>
  );
}

export default Header;
