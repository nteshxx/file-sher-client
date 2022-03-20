import React from 'react';
import link from '../assets/link.svg';
import '../styles/download.css';

const Download = () => {
  return (
    <div className="download">
      <div className="download-container">
        <div className="link-box">
          <img src={link} alt="" />
          <input id="paste-link" type="text" name="download-link" placeholder="Paste download link here" />
        </div>
      </div>
      <button className="download-btn">Download</button>
    </div>
  )
}

export default Download;