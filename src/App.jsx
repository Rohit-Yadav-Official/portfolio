import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


import Navbar from './components/Navbar/navbar';
import HomePage from './components/routes/Homepage';
import BlogPage from './components/blog/MediumBlogSection';
import InterviewExperienceList from './components/interview/InterviewExperienceList';
import InterviewExperienceDetail from './components/interview/InterviewExperienceDetail';
import CoreSubjectsList from './components/core-subjects/CoreSubjectsList';
import CoreSubjectDetail from './components/core-subjects/CoreSubjectDetail';

// Wrapper to use hooks like useLocation outside <Router>
const AppWrapper = () => {
  const location = useLocation();

  // Check if current route is /blog, /interview-experience, or /core-subject
  const isBlogPage = location.pathname === '/blog';
  const isInterviewPage = location.pathname.startsWith('/interview-experience');
  const isCoreSubjectPage = location.pathname.startsWith('/core-subject');

  return (
    <div className="app">
      {/* Show Navbar only if not on the blog, interview experience, or core subject pages */}
      {!isBlogPage && !isInterviewPage && !isCoreSubjectPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/interview-experience" element={<InterviewExperienceList />} />
        <Route path="/interview-experience/:id" element={<InterviewExperienceDetail />} />
        <Route path="/core-subject" element={<CoreSubjectsList />} />
        <Route path="/core-subject/:subjectId" element={<CoreSubjectDetail />} />
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
