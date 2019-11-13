import React from 'react';
import './App.css';
import TopNavBar from './Components/TopNavBar/TopNavBar';
import SocialSideBar from './Components/SocialSideBar/SocialSideBar';
import StartMainContent from './Components/StartMainContent/StartMainContent';

function App() {
  return (
    <>
    <TopNavBar />
    <main>
        <SocialSideBar />
        
        <StartMainContent />
    </main>
    </>
  );
}

export default App;
