import React, { Component } from 'react';

class SectionFeatures extends Component {
  render() {
    return (
      <div className="SectionFeatures">



<section id="features " >
      <div className="container">

        <div className="row feature-item">
          <div className="col-lg-6 wow fadeInUp">
            <img src="img/features-1.svg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>Hire world className talents an get the job done.</h4>
            <p>
            Every technician creates a detailed profile with their qualifications, skillsets, and even equipment they commonly use on the job. Plus, you’ll have access to reviews from other businesses to get the inside scoop on their performance.            </p>

          </div>
        </div>

        <div className="row feature-item mt-5 pt-5">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src="img/features-2.svg" className="img-fluid" alt="" />
          </div>

          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>Your funds are always protected.</h4>
            <p>
            Outsource your tasks risk-free and collaborate with qualified technicians. If there's ever an issue, we'll help you fix it.            
            </p>

          </div>
          
        </div>

      </div>
    </section>

        </div>
    );
  }
}

export default SectionFeatures;
