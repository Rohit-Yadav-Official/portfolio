import { useState } from 'react';
import { Link } from 'react-router-dom';
import interviewExperiences from '../../data/interviewExperiences';
import Footer from '../footer/footer';
import './InterviewExperience.css';

const InterviewExperienceList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const experiencesPerPage = 6;

  // Filter only published experiences
  const publishedExperiences = interviewExperiences.filter(exp => exp.status === 'published');

  // Calculate pagination
  const totalPages = Math.ceil(publishedExperiences.length / experiencesPerPage);
  const indexOfLastExp = currentPage * experiencesPerPage;
  const indexOfFirstExp = indexOfLastExp - experiencesPerPage;
  const currentExperiences = publishedExperiences.slice(indexOfFirstExp, indexOfLastExp);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="interview-experience-section">
      <div className="interview-header">
        <h1 className="interview-main-title">Interview Experiences</h1>
        <p className="interview-subtitle">
          Real interview experiences from top tech companies. Learn from the process, prepare better.
        </p>
      </div>

      <div className="interview-grid">
        {currentExperiences.map((experience) => (
          <Link 
            to={`/interview-experience/${experience.id}`} 
            key={experience.id}
            className="interview-card"
          >
            <div className="interview-card-image">
              <img src={experience.image} alt={experience.company} />
            </div>
            <div className="interview-card-content">
              <div className="interview-card-header">
                <h2 className="interview-company">{experience.company}</h2>
                <span className="interview-role">{experience.role}</span>
              </div>
              <p className="interview-date">
                {new Date(experience.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="interview-summary">{experience.summary}</p>
              <div className="interview-tags">
                {experience.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="interview-tag">{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {publishedExperiences.length === 0 && (
        <div className="no-experiences">
          <p>No interview experiences published yet. Check back soon!</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="interview-pagination">
          <button 
            className="pagination-btn" 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          
          <button 
            className="pagination-btn" 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default InterviewExperienceList;
