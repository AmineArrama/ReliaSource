import React, { Component } from 'react';
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";

  class Header extends Component {
      constructor(props) {
    super(props);

    this.searchCall = this.searchCall.bind(this);
  }

  searchCall(){
    return(
        <li className="active"><Link to="/Search">Search</Link></li>

    )

  }
  render() {
    return (

      
      <div className="Header">

  
  <section id="intro" className="clearfix">
    <div className="container d-flex h-100">
      <div className="row justify-content-center align-self-center">
        <div className="col-md-6 intro-info order-md-first order-last">
          <h2>Hire Technicians On-Demand!</h2>

          <div>

            <Link to="/Search">
            <a href="" className="btn-get-started ">
            Get started
            </a>
            </Link>
          </div>
        </div>
  
        <div className="col-md-6 intro-img order-md-last order-first">
          <img src="img/intro-img.svg" alt="" className="img-fluid" />
        </div>
      </div>

    </div>
  </section>

  
        </div>
    );
  }
}

export default Header;
