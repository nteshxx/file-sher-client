import React, { useState } from 'react';
import link from '../assets/link.svg';
import '../styles/download.css';
import fileDownload from 'js-file-download';
import axios from 'axios';

const Download = () => {
  const [downloadURL, setDownloadURL] = useState(null);

  const downloadFile = () => {
    let filePath = `${downloadURL}`;
    axios.get(`${filePath}`, {
        responseType: 'blob',
    }).then((res) => {
      let filename = filePath.replace(/^.*[\\/]/, '')
      let fileExtension;
      fileExtension= filePath.split('.');
      fileExtension =fileExtension[fileExtension.length -1];
      fileDownload(res.data, `${filename}.${fileExtension}`);
    });
  }

  return (
    <div className="download">
      <div className="download-container">
        <div className="link-box">
          <img src={link} alt="" />
          <input id="paste-link" type="text" name="download-link" placeholder="Paste download link here" onChange={(e) => setDownloadURL(e.target.value)} />
        </div>
      </div>
      <button className="download-btn" onClick={() => downloadFile()}>Download</button>
    </div>
  )
}

export default Download;