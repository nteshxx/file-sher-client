import React from 'react';
import ProgressBar from '../components/ProgressBar';
import '../styles/faqs.css';

const Faqs = () => {
  return (
    <div className="faqs-container">
      <h2 className='wip'>Work in Progress!</h2>
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

export default React.memo(Faqs);
