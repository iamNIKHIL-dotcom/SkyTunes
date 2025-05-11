import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="loading-container">
        <div className="top">
          <div className="skeleton-container">
            <div className="skeleton skeleton-avatar"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
        <div className="content">
          <div>
            <div className="title">Curating Your Perfect Playlist</div>
            <div className="timestamp">Analyzing Weather & Mood...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 