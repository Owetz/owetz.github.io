import React from "react";
import "./App.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
    <header>
      <img src={require('./images/Owetz_logo.png')} className="logo" alt="Owetz Logotype"/>
    </header>
    <main className="header">
      <p className="text">Hej, jag heter <span className="accent">Daniel Ahl</span>.</p>
      <p class="text">Jag är en Webbutvecklare.</p>
      <a className="cBtn" href="mailto:info@owetz.se">Kontakta mig</a>
      <section className="socialSection">
        <a href="https://www.facebook.com/Tvahlen" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
        <a href="https://twitter.com/danahlen" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /></a>
        <a href="https://www.instagram.com/danahlen/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagramSquare} /></a>
        <a href="https://www.linkedin.com/in/owetz/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
      </section>
    </main>
    </>
  );
}

export default App;
