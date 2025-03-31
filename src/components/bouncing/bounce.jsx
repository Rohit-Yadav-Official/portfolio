import React, { useState } from "react";
import bounce1 from "../../assets/file.png"; // Ensure the path to your image is correct
import './bounce.css';

const Bounce = () => {
  const [hidden, setHidden] = useState(false); // State to track if image is hidden
  const [animationPaused, setAnimationPaused] = useState(false); // State to control animation pause

  // Handle click to trigger the "burst" effect
  const handleClick = () => {
    setHidden(true); // Hide the image on click
    setAnimationPaused(true); // Pause the animation when the image bursts

    setTimeout(() => {
      setHidden(false); // Reset visibility after a short duration (burst effect duration)
      setAnimationPaused(false); // Resume the animation
    }, 50000); // Adjust the duration based on the fade-out time
  };
  document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.bouncing-image');
    image.addEventListener('animationstart', function(event) {
      console.log('Animation started:', event.animationName);
    });
    image.addEventListener('animationiteration', function(event) {
      console.log('Animation iteration:', event.animationName);
    });
    image.addEventListener('animationend', function(event) {
      console.log('Animation ended:', event.animationName);
    });
  });
  return (
    <div className="image-container">
      <img
        src={bounce1}
        alt="Bouncing Image"
        className={`bouncing-image ${hidden ? "hidden" : ""} ${animationPaused ? "stopped-animation" : ""}`} // Apply the paused animation class
        onClick={handleClick} // Trigger the burst effect on click
      />
    </div>
  );
};

export default Bounce;