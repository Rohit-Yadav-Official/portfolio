import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import Navbar from './components/Navbar/navbar';
import HomePage from './components/routes/Homepage';
import BlogPage from './components/blog/MediumBlogSection';

// Wrapper to use hooks like useLocation outside <Router>
const AppWrapper = () => {
  const location = useLocation();

  // Check if current route is /blog
  const isBlogPage = location.pathname === '/blog';

  return (
    <div className="app">
      {/* Show Navbar only if not on the blog page */}
      {!isBlogPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
