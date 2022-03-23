import React, { useState } from 'react';
import link from '../assets/link.svg';
import '../styles/download.css';
import fileDownload from 'js-file-download';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Download = () => {
  const [downloadURL, setDownloadURL] = useState(null);

  const notifyError = () => toast("Link has been expired or invalid!");

  const notifyDownload = () => toast("Downloading...");

  const downloadFile = () => {
    let filePath = `${downloadURL}`;
    axios.get(`${filePath}`, {
        responseType: 'blob',
    }).then((res) => {
      notifyDownload();
      let filename = filePath.split('/');
      let extension = filename.pop();
      fileDownload(res.data, `file-sher-${filename.pop()}.${extension}`);
    }).catch((err) => {
      notifyError();
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
      <ToastContainer />
    </div>
  )
}

export default Download;