import React from 'react';
import './App.css';
import TopNavBar from './Components/TopNavBar/TopNavBar';

function App() {
  return (
    <>
      <TopNavBar />
      <main className="landingpage">
        <h1 className="title">Daniel Owetz Ahl</h1>
        <h2 className="subtitle">Frontend Developer</h2>
      </main>
    </>
  );
}

export default App;
