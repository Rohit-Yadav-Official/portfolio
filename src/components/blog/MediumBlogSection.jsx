import { useEffect, useState } from "react";
import { FaRss, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../footer/footer";
import "./MediumBlogSection.css";

const MediumBlogSection = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yadavrohit-dev")
      .then(res => res.json())
      .then(data => {
        setAllPosts(data.items);
      });
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

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
    <section className="medium-container">
      <h1 className="medium-heading">
        Writing on software development and <br /> anything else I find interesting.
      </h1>
      <p className="medium-subtext">
        All of my long-form thoughts on programming, content creation, and more, collected in chronological order.
      </p>
      <div className="rss-link">
        <FaRss className="rss-icon" />
        <a href="https://medium.com/feed/@yadavrohit-dev" target="_blank" rel="noopener noreferrer">RSS Feed</a>
      </div>
      <div className="medium-articles">
        {currentPosts.map((post, index) => (
          <div key={index} className="medium-article">
            <div className="medium-date">
              {new Date(post.pubDate).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
            </div>
            <div className="medium-content">
              <h3 className="medium-title">{post.title}</h3>
              <p className="medium-snippet" dangerouslySetInnerHTML={{ __html: post.contentSnippet }}></p>
              <a href={post.link} className="medium-read-link" target="_blank" rel="noopener noreferrer">
                Read article <span className="arrow">›</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <button 
            className="pagination-btn prev-btn" 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <FaChevronLeft /> Previous
          </button>
          
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          
          <button 
            className="pagination-btn next-btn" 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next <FaChevronRight />
          </button>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default MediumBlogSection;
