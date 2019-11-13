import React from 'react';
import './SocialSideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const SocialSideBar = () => {
    return (
        <aside className="social">
            <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href="#"><FontAwesomeIcon icon={faGithubSquare} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </aside>
    )
}

export default SocialSideBar;