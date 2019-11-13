import React from 'react';
import './TopNavBar.css';

const TopNavBar = () => {
    return (
        <header>
            <div className="logo">
                <img src="img/Owetz_logo.png" alt="Owetz's Logotype" className="logo" />
                <span>DANIEL OWETZ AHL</span>
            </div>
            <nav>
                <a href="#">ABOUT</a>
                <a href="#">PORTFOLIO</a>
                <a href="#">CONTACT</a>
            </nav>
        </header>
    )
}

export default TopNavBar;