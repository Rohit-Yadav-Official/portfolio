import React, { useEffect, useState } from "react";
import { FaRss } from "react-icons/fa";
import "./MediumBlogSection.css";

const MediumBlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yadavrohit-dev")
      .then(res => res.json())
      .then(data => {
        setPosts(data.items.slice(0, 5));
      });
  }, []);

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
        {posts.map((post, index) => (
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
    </section>
  );
};

export default MediumBlogSection;
