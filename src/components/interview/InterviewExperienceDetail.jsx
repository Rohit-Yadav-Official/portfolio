import { useParams, Link } from 'react-router-dom';
import interviewExperiences from '../../data/interviewExperiences';
import Footer from '../footer/footer';
import './InterviewExperience.css';

const InterviewExperienceDetail = () => {
  const { id } = useParams();
  const experience = interviewExperiences.find(exp => exp.id === parseInt(id));

  if (!experience) {
    return (
      <div className="interview-detail-container">
        <div className="not-found">
          <h1>Interview Experience Not Found</h1>
          <Link to="/interview-experience" className="back-link">
            ← Back to All Experiences
          </Link>
        </div>
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
      
      case 'image':
        return (
          <div key={index} className="content-image">
            <img src={contentItem.url} alt={contentItem.alt || 'Interview content'} />
            {contentItem.caption && <p className="image-caption">{contentItem.caption}</p>}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="interview-detail-container">
      <Link to="/interview-experience" className="back-link">
        ← Back to All Experiences
      </Link>

      <article className="interview-detail">
        <header className="interview-detail-header">
          <div className="company-logo">
            <img src={experience.image} alt={experience.company} />
          </div>
          <h1 className="detail-title">{experience.company} - {experience.role}</h1>
          <div className="detail-meta">
            <span className="detail-date">
              {new Date(experience.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <div className="detail-tags">
              {experience.tags.map((tag, index) => (
                <span key={index} className="detail-tag">{tag}</span>
              ))}
            </div>
          </div>
        </header>

        <div className="interview-content">
          {experience.content.map((item, index) => renderContent(item, index))}
        </div>
      </article>

      <div className="interview-footer">
        <Link to="/interview-experience" className="back-link-bottom">
          ← Back to All Experiences
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewExperienceDetail;
