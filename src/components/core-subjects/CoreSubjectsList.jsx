import { Link } from 'react-router-dom';
import coreSubjects from '../../data/coreSubjects';
import Footer from '../footer/footer';
import './CoreSubjects.css';

const CoreSubjectsList = () => {
  const subjects = Object.values(coreSubjects);

  return (
    <section className="core-subjects-section">
      <div className="core-subjects-container">
        <header className="core-subjects-header">
          <h1 className="core-subjects-title">Core Subjects</h1>
          <p className="core-subjects-subtitle">
            Comprehensive guides to essential computer science subjects. 
            Master the fundamentals of Operating Systems, Computer Networks, and Data Structures & Algorithms.
          </p>
        </header>

        <div className="core-subjects-grid">
          {subjects.map((subject) => (
            <Link 
              to={`/core-subject/${subject.id}`} 
              key={subject.id}
              className="core-subject-card"
              style={{ '--subject-color': subject.color }}
            >
              <div className="subject-icon">
                <span className="icon-emoji">{subject.icon}</span>
              </div>
              
              <div className="subject-content">
                <h2 className="subject-title">{subject.title}</h2>
                <p className="subject-description">{subject.description}</p>
                
                <div className="subject-stats">
                  <div className="stat">
                    <span className="stat-number">{subject.topics.length}</span>
                    <span className="stat-label">Topics</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Complete</span>
                  </div>
                </div>

                <div className="subject-topics">
                  <h4 className="topics-title">Key Topics:</h4>
                  <div className="topics-list">
                    {subject.topics.slice(0, 3).map((topic) => (
                      <span key={topic.id} className="topic-tag">
                        {topic.title}
                      </span>
                    ))}
                    {subject.topics.length > 3 && (
                      <span className="topic-tag more">
                        +{subject.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="subject-arrow">
                <span className="arrow">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="core-subjects-info">
          <div className="info-card">
            <h3>Why Study Core Subjects?</h3>
            <ul>
              <li>Foundation for technical interviews</li>
              <li>Essential for system design</li>
              <li>Improves problem-solving skills</li>
              <li>Required for software engineering roles</li>
            </ul>
          </div>
          
          <div className="info-card">
            <h3>How to Use This Guide</h3>
            <ul>
              <li>Start with basics and progress to advanced</li>
              <li>Practice with coding problems</li>
              <li>Understand time and space complexity</li>
              <li>Apply concepts in real projects</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </section>
  );
};

export default CoreSubjectsList;
