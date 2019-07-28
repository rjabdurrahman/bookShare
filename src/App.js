import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header id="header">
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <a href="index.html"><img src="img/logo.png" alt="" title /></a>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="elements.html">Signup</a></li>
                <li><a href="contact.html">Login</a></li>
              </ul>
            </nav>{/* #nav-menu-container */}
          </div>
        </div>
      </header>
      {/* start banner Area */}
      <section className="banner-area relative" style={{minHeight: '100vh'}}>
        <div className="overlay overlay-bg" />
        <div className="container" style={{paddingTop: '20%'}}>
          <div className="row fullscreen d-flex justify-content-center align-items-center">
            <div className="banner-content col-lg-10 col-md-12 justify-content-center">
              <h6 className="text-uppercase">Whenever we share, share with our heart</h6>
              <h1>
                Love Reading and Sharing Books
        </h1>
              <p className="text-white mx-auto">
                “You don’t have to burn books to destroy a culture. Just get people to stop reading them.” – Ray
                Bradbury
        </p>
              <a href="#" className="primary-btn squire text-uppercase mt-10">Share Your Book</a>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}

    </div>
  );
}

export default App;
