import React from 'react';
import airplane from '../../images/airplane.svg';
import './HomePage.scss';

class HomePage extends React.Component {
  state = {
    activeSide: 'right'
  }
  render() {
    const { activeSide } = this.state;
    return (
      <div className="Section-one">
        <div className="Section-one-fullBg">
          <h1>HELLO<span className="HomePage-dot">.</span></h1>
        </div>
        {/* <div className="Section-one-bg"></div> */}
        <div className="Homepage-airplane"></div>
          {activeSide === 'right' ? (
            <div className="Homepage-bg Homepage-left">
              <div className="Homepage-vancouver">
                <span className="Homepage-vancouver-title">
                  <h2>To Vancouver</h2>
                  <img alt="airplane" src={airplane} />
                </span>
                <p>Now I’m a Vancouver based<br />web designer/developer.</p>
              </div>
            </div>
          ) : (
            <div className="Homepage-bg Homepage-right">
              <div className="Homepage-japan">
                <h2>From Japan</h2>
                <p>I was a graphic/web designer<br />in Tokyo.</p>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default HomePage;