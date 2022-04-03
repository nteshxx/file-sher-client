import React from 'react';
import '../styles/upload.css';
import Dropzone from '../components/Dropzone';

const Upload = () => {
  return (
    <div>
      <Dropzone />
      <p className='note'>File size must not exceed <span style={{fontWeight: 'bold'}}>100mb</span></p>
    </div>
  )
}

export default React.memo(Upload);