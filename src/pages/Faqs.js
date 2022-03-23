import React from 'react';
import ProgressBar from '../components/ProgressBar';

const Faqs = () => {
  return (
    <div className="blog-container" style={{textAlign: 'center', marginTop: '1rem'}}>
      <h2 style={{ fontWeight: '400', opacity: '0.5' }}>Work in Progress!</h2>
      <ProgressBar done="10" />
      <ProgressBar done="20" />
      <ProgressBar done="30" />
      <ProgressBar done="50" />
      <ProgressBar done="60" />
      <ProgressBar done="80" />
      <ProgressBar done="100" />
      <ProgressBar done="90" />
    </div>
  );
};

export default Faqs;
