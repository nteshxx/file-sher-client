import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import '../styles/dropzone.css';
import uploadicon from '../assets/upload.png';
import ProgressBar from '../components/ProgressBar';

const Dropzone = () => {
  const [generatedLink, setGeneratedLink] = useState("http://localhost:3000/f6bad323-b17c-4c76-a161-eb02ff82c911");
  const [progress, setProgress] = useState(100);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  useEffect(() => {
    var formData = new FormData();
    formData.append('myfile', acceptedFiles[0]);
    axios
      .post('https://inshare-api.onrender.com/api/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor((loaded * 100) / total);
          // console.log(`${loaded} bytes of ${total} bytes | ${percent}%`);
          if (percent < 100) {
            setProgress(percent);
          }
        },
      })
      .then((res) => {
        setGeneratedLink(res.data.file);
        setProgress(100);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [acceptedFiles]);

  return (
    <section className="dropzone-container">
      {progress === 0 ? (
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <img src={uploadicon} alt="" />
          <p>
            You can always drag and drop your files here, or{' '}
            <span id="browseBtn">browse</span> them
          </p>
        </div>
      ) : progress === 100 ? (
        <div className="link-container">
          <h3 className="download-link">{generatedLink}</h3>
          <button className="copy-button" onClick={() => {navigator.clipboard.writeText(generatedLink)}}>Copy</button>
        </div>
      ) : (
        <ProgressBar done={progress} />
      )}
    </section>
  );
}

export default Dropzone;
