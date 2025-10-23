import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


import Navbar from './components/Navbar/navbar';
import HomePage from './components/routes/Homepage';
import BlogPage from './components/blog/MediumBlogSection';
import InterviewExperienceList from './components/interview/InterviewExperienceList';
import InterviewExperienceDetail from './components/interview/InterviewExperienceDetail';

// Wrapper to use hooks like useLocation outside <Router>
const AppWrapper = () => {
  const location = useLocation();

  // Check if current route is /blog or /interview-experience
  const isBlogPage = location.pathname === '/blog';
  const isInterviewPage = location.pathname.startsWith('/interview-experience');

  return (
    <div className="app">
      {/* Show Navbar only if not on the blog or interview experience pages */}
      {!isBlogPage && !isInterviewPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/interview-experience" element={<InterviewExperienceList />} />
        <Route path="/interview-experience/:id" element={<InterviewExperienceDetail />} />
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
