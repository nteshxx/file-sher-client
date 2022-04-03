import React from 'react';
import '../styles/home.css';
import landingimage from '../assets/minlandingpage.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="main">
          <img src={landingimage} alt=""/>
          <div className="hero">
            <h2>Share your files<br/> and images <br/>with just a simple click!</h2>
            <Link className="getStarted" to="/upload">Get Started</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Home);