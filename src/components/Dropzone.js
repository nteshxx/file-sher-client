import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import '../styles/dropzone.css';
import uploadicon from '../assets/upload.png';

function Dropzone() {
  const [filesx, setFilesx] = useState([]);
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="dropzone-container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <img src={uploadicon} alt="" />
        <p>You can always drag and drop your files here, or <span id="browseBtn">browse</span> them</p>
      </div>
      <div>
        <h4>Files</h4>
        <ul>{files}</ul>
      </div>
    </section>
  );
}

export default Dropzone;
