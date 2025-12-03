import React from 'react';
import HomeHero from './HomeHero';

function HomePage() {
  return (
    <div className="homepage">
      <HomeHero />
      <div className="container">
        <h2>Welcome to MW Sports Lab</h2>
        <p>Advanced NFL Analytics & Simulation Platform</p>
        <div className="features">
          <div className="card">
            <h3>Live Games</h3>
            <p>View today's games with real-time odds</p>
          </div>
          <div className="card">
            <h3>Odds Analysis</h3>
            <p>Compare odds across multiple sportsbooks</p>
          </div>
          <div className="card">
            <h3>Player Props</h3>
            <p>Analyze player prop bets</p>
          </div>
          <div className="card">
            <h3>Parlay Builder</h3>
            <p>Build and analyze custom parlays</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
