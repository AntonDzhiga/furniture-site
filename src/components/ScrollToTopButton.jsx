import React, { useState, useEffect } from 'react';
import upIcon from "../assets/icon-up-48.png"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleVisibility = () => {
    
    if (window.scrollY > 100) { // Змініть цей відступ від верхньої частини сторінки, при якому кнопка з'являтиметься
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-to-top-btn ${isVisible ? 'show':''}`}>
      <button onClick={scrollToTop}><img src={upIcon} alt="" /></button>
    </div>
  );
};

export default ScrollToTopButton;
