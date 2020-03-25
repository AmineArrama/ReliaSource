import React, { Component } from 'react';

class SectionServices extends Component {
  render() {
    return (
      <div className="SectionServices">


<section id="services" className="section-bg">
      <div className="container">

        <header className="section-header">
          <h3>What makes ReliaSource the best marketplace solution?</h3>

        </header>

        <div className="row">

          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon" style={{background: "#fceef3"}}><i className="ion-ios-analytics-outline" style={{color: "#ff689b"}}></i></div>
              <h4 className="title">On-Demand Coverage Across North America</h4>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon" style={{background: "#fff0da"}}><i className="ion-ios-bookmarks-outline" style={{color: "#e98e06"}}></i></div>
              <h4 className="title">IT Service Industries</h4>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon" style={{background: "#e6fdfc"}}><i className="ion-ios-paper-outline" style={{color: "#3fcdc7"}}></i></div>
              <h4 className="title">No Software to Download or Set-Up</h4>
            </div>
          </div>


        </div>

      </div>
    </section>

        </div>
    );
  }
}

export default SectionServices;
