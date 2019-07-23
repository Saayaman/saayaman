import React from 'react';
import './SectionTwo.scss';
import me from '../../images/me.png';
import SectionWrapper from '../SectionWrapper/SectionWrapper';

const SectionTwo = () => (
  <SectionWrapper
    leftNode={
      <div className="SectionTwo-left">
        <h1>About Me.</h1>
        <div className="SectionTwo-table">
          <h4>Skills</h4>
          <div className="SectionTwo-table-content SectionTwo-grid">
            <span>React</span>
            <span>HTML5</span>
            <span>css/sass</span>
            <span>Javascript</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>Photography</span>
          </div>
        </div>
        <div className="SectionTwo-table">
          <h4>Resume</h4>
          <div className="SectionTwo-table-content">download resume</div>
        </div>
        <div className="SectionTwo-table">
          <h4>Interests</h4>
          <div className="SectionTwo-table-content">
            <a className="GreenLink" href="https://ayakosayama.tumblr.com/">photography</a>{' / '}
            <a className="GreenLink" href="https://www.meetup.com/React-Dojo/" target="blank">teaching at meetups</a>
            {' / '}outdoor activities</div>
        </div>
        <div className="SectionTwo-vip">
          I have a very <span style={{ fontWeight: 'bold'}}>chill🥶</span>personality and love to hang out with people! I love <span style={{ fontWeight: 'bold' }}>exploring the latest frontend technologies🧭</span> and share them with team members and community.
        </div>
      </div>
    }
    rightNode={
      <img alt="myphoto" src={me} />
    }
  />
  // <div className="SectionTwo">
  //   <div className="SectionTwo-left">
  //     <h1>About Me.</h1>

  //     <div className="SectionTwo-table">
  //       <h4>Skills</h4>
  //       <div className="SectionTwo-table-content SectionTwo-grid">
  //         <span>React</span>
  //         <span>HTML5</span>
  //         <span>css/sass</span>
  //         <span>Javascript</span>
  //         <span>Photoshop</span>
  //         <span>Illustrator</span>
  //         <span>Photography</span>
  //       </div>
  //     </div>
  //     <div className="SectionTwo-table">
  //       <h4>Resume</h4>
  //       <div className="SectionTwo-table-content">download resume</div>
  //     </div>
  //     <div className="SectionTwo-table">
  //       <h4>Interests</h4>
  //       <div className="SectionTwo-table-content">
  //         <a className="GreenLink" href="https://ayakosayama.tumblr.com/">photography</a>{' / '}
  //         <a className="GreenLink" href="https://www.meetup.com/React-Dojo/" target="blank">teaching at meetups</a>
  //         {' / '}outdoor activities</div>
  //     </div>
  //     <div className="SectionTwo-vip">
  //       I have a very <span style={{ fontWeight: 'bold'}}>chill🥶</span>personality and love to hang out with people! I love <span style={{ fontWeight: 'bold' }}>exploring the latest frontend technologies🧭</span> and share them with team members and community.
  //     </div>
  //   </div>
  //     <div className="SectionTwo-right">
  //       <img alt="myphoto" src={me} />
  //     </div>
  // </div>
);


export default SectionTwo;
