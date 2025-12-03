import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamesView from './components/GamesView';
import OddsView from './components/OddsView';
import PropsView from './components/PropsView';
import ParlayBuilder from './components/ParlayBuilder';
import SimulateGame from './components/SimulateGame';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Router>
      <div className="app">
        {/* Header Navigation */}
        <header className="header">
          <div className="header-container">
            <Link to="/" className="logo">
              <h1>MW Sports Lab</h1>
              <p>Advanced NFL Analytics & Simulation</p>
            </Link>
            <nav className="nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/games" className="nav-link">Games</Link>
              <Link to="/odds" className="nav-link">Odds</Link>
              <Link to="/props" className="nav-link">Props</Link>
              <Link to="/parlay-builder" className="nav-link">Builder</Link>
              <Link to="/simulate" className="nav-link">Simulate</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {error && (
            <div className="error-banner">
              {error}
              <button onClick={() => setError(null)}>Dismiss</button>
            </div>
          )}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesView />} />
            <Route path="/odds" element={<OddsView />} />
            <Route path="/props" element={<PropsView />} />
            <Route path="/parlay-builder" element={<ParlayBuilder />} />
            <Route path="/simulate" element={<SimulateGame />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 MayorWardProd Sports Lab. All rights reserved.</p>
          <p>Data powered by ESPN & The Odds API</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
