import React, { Component } from 'react';

class SectionTeam extends Component {
  render() {
    return (
      <div className="SectionTeam">


<section id="team" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3>Leadership</h3>
          <p>
          ReliaSource is dedicated to fostering creativity and delivering excellence throughout our organization. Staying on the leading edge of technology solutions that solve business problems for more than ten years requires a talented and focused team dedicated toward driving ongoing innovation. Our executive team combines technological expertise with deep knowledge of the global marketplace and a clear vision of the future. They focus ReliaSource to be a responsive, customer-oriented organization that consistently delivers cost-effective and practical business solutions
          </p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6 wow fadeInUp">
            <div className="member">
              <img src="img/team-1.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Joe Zuramski</h4>
                  <span>President</span>

                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="member">
              <img src="img/team-2.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Julie Zuramski</h4>
                  <span>CEO</span>

                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="member">
              <img src="img/team-3.jpg" className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Patrick McHose</h4>
                  <span>CTO</span>

                </div>
              </div>
            </div>
          </div>



        </div>

      </div>
    </section>

        </div>
    );
  }
}

export default SectionTeam;
