import React from 'react';
import '../styles/upload.css';
import Dropzone from '../components/Dropzone';

const Upload = () => {
  return (
    <div>
      <Dropzone />
      <p style={{ textAlign: 'right', marginRight: '10rem', marginTop: '-3rem'}}>File size must not exceed <span style={{fontWeight: 'bold'}}>100mb</span></p>
    </div>
  )
}

export default Upload;