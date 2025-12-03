import React from 'react';
import HomeHero from '../HomeHero';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage">
      <HomeHero />
      
      <div className="container">
        <h2>Welcome to MW Sports Lab</h2>
        <p>Advanced NFL Analytics & Simulation Platform</p>
        <div className="features">
          <Link to="/games" className="card">
            <h3>Live Games</h3>
            <p>View today's games with real-time odds</p>
          </Link>
          <Link to="/odds" className="card">
            <h3>Odds Analysis</h3>
            <p>Compare odds across multiple sportsbooks</p>
          </Link>
          <Link to="/props" className="card">
            <h3>Player Props</h3>
            <p>Analyze player prop bets</p>
          </Link>
          <Link to="/parlay-builder" className="card">
            <h3>Parlay Builder</h3>
            <p>Build and analyze custom parlays</p>
          </Link>
          <Link to="/simulate" className="card">
            <h3>Game Simulator</h3>
            <p>Run advanced game simulations</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
