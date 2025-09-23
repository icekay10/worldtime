import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import TimeComparator from './components/TimeComparator';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';
import DayNightTracker from './components/DayNightTracker';
import GeographyQuiz from './components/GeographyQuiz';
import PolicyPage from './components/PolicyPage';
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
            <Route path="/geography=quiz-game" element={<GeographyQuiz />} />
            <Route path="/privacy-policy" element={<PolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;