import React, { Component } from 'react';
import SectionHeader from './sections/SectionHeader.js';
import SectionServices from './sections/SectionServices.js';
import SectionWhyUs from './sections/SectionWhyUs.js';
import SectionFeatures from './sections/SectionFeatures.js';
import SectionOurClients from './sections/SectionOurClients.js';
import SectionTeam from './sections/SectionTeam.js';

  
class Start extends Component {
  render() {
    return (
      <div className="Start">
        <body>
          
       
  <SectionHeader />
      



  <main id="main">


    {/*
    <SectionAboutUS />
    */}
          
        <SectionServices />
        <SectionWhyUs />
        <SectionFeatures />
        <SectionOurClients />
        <SectionTeam />


  </main>

 


</body>
      </div>
    );
  }
}

export default Start;
