import React from 'react';
import '../style/BackgroundImagePage.module.css';

const BackgroundImagePage = ({ children }) => {
  return (
    <div className="background-image-page">
      {children}
    </div>
  );
};

export default BackgroundImagePage;
