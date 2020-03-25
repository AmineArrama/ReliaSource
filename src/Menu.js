import React, { Component } from 'react';
import {
    Link,
  } from "react-router-dom";

  class Menu extends Component {
  render() {
    return (
      <div className="Menu">


  <header id="header">

    <div id="topbar">
      <div className="container">
        <div className="social-links">
          <a href="https://www.facebook.com/ReliaSource" rel="noopener noreferrer"  target="_blank" className="facebook"><i className="fa fa-facebook"></i></a>
          <a href="https://www.linkedin.com/company/reliasource" rel="noopener noreferrer"  target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>

    <div className="container">

      <div className="logo float-left">
        {/* Uncomment below if you prefer to use an image logo */}
        <h1 className="text-light"><Link to="/" className="scrollto"><span>ReliaSource</span></Link></h1>
        {/* <a href="#header" className="scrollto"><img src="img/logo.png" alt="" className="img-fluid"></a> */}
      </div>

      <nav className="main-nav float-right d-none d-lg-block">


        <ul>

        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/Search">Search</Link></li>
        
        </ul>
      </nav>{/* .main-nav */}
      
    </div>
  </header>





        </div>
    );
  }
}

export default Menu;
