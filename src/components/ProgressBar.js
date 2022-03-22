import React from 'react';
import '../styles/progressBar.css';

const ProgressBar = ({ done }) => {
  return (
    <div className="progress-bar">
      <div className="progress-done" style={{
        opacity: '1',
        width: `${done}%`,
        height: '100%',
        background: '#FF8C00',
        zIndex: '2',
        position: 'absolute',
        top: 0
      }}></div>
    </div>
  );
};

export default ProgressBar;
