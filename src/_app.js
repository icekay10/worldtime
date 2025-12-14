// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages';
import TimeComparator from './pages/world-clock-comparison-tool';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import BlogPage from './pages/blogpage';
import BlogPost from './pages/blogpost';
import DayNightTracker from './pages/global-day-and-night-tracker-world-clock';
import GeographyQuiz from './pages/';
import PolicyPage from './pages/policy-page';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/world-clock-comparison-tool" element={<TimeComparator />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/global-day-and-night-tracker-world-clock" element={<DayNightTracker />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/geography-quiz-game" element={<GeographyQuiz />} />
            <Route path="/privacy-policy" element={<PolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;