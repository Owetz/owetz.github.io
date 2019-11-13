import React from 'react';
import './SocialSideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const SocialSideBar = () => {
    return (
        <aside className="social">
            <a href="https://www.facebook.com/Tvahlen" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href="https://twitter.com/danahlen" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href="https://github.com/owetz" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
            <a href="https://www.linkedin.com/in/owetz/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </aside>
    )
}

export default SocialSideBar;