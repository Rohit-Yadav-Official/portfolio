import { useParams, Link } from 'react-router-dom';
import coreSubjects from '../../data/coreSubjects';
import Footer from '../footer/footer';
import './CoreSubjects.css';

const CoreSubjectDetail = () => {
  const { subjectId } = useParams();
  const subject = coreSubjects[subjectId];

  if (!subject) {
    return (
      <div className="core-subjects-section">
        <div className="core-subjects-container">
          <div className="not-found">
            <h1>Subject Not Found</h1>
            <Link to="/core-subject" className="back-link">
              ← Back to Core Subjects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const renderContent = (contentItem, index) => {
    switch (contentItem.type) {
      case 'heading': {
        const HeadingTag = `h${contentItem.level}`;
        return (
          <HeadingTag key={index} className={`content-heading level-${contentItem.level}`}>
            {contentItem.text}
          </HeadingTag>
        );
      }
      
      case 'paragraph': {
        const fontSize = contentItem.fontSize || 'medium';
        return (
          <p key={index} className={`content-paragraph font-${fontSize}`}>
            {contentItem.text}
          </p>
        );
      }
      
      case 'list':
        return (
          <ul key={index} className="content-list">
            {contentItem.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="core-subjects-section">
      <div className="core-subjects-container">
        <Link to="/core-subject" className="back-link">
          ← Back to Core Subjects
        </Link>

        <header className="subject-detail-header" style={{ '--subject-color': subject.color }}>
          <div className="subject-header-content">
            <div className="subject-icon-large">
              <span className="icon-emoji">{subject.icon}</span>
            </div>
            <div className="subject-header-text">
              <h1 className="subject-detail-title">{subject.title}</h1>
              <p className="subject-detail-description">{subject.description}</p>
            </div>
          </div>
        </header>

        <div className="subject-topics-grid">
          {subject.topics.map((topic) => (
            <div key={topic.id} className="topic-card">
              <div className="topic-header">
                <h3 className="topic-title">{topic.title}</h3>
                <p className="topic-description">{topic.description}</p>
              </div>
              
              <div className="topic-content">
                {topic.content.map((item, index) => renderContent(item, index))}
              </div>
            </div>
          ))}
        </div>

        <div className="subject-footer">
          <div className="subject-progress">
            <h3>Study Progress</h3>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: '100%',
                  backgroundColor: subject.color 
                }}
              ></div>
            </div>
            <p>Complete all topics to master {subject.title}</p>
          </div>
          
          <div className="subject-actions">
            <Link to="/core-subject" className="action-btn secondary">
              ← Back to Subjects
            </Link>
            <button className="action-btn primary" style={{ backgroundColor: subject.color }}>
              Mark as Complete
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CoreSubjectDetail;
