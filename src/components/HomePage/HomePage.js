import React from 'react';
import cx from 'classnames';
import airplane from '../../images/airplane.svg';
import './HomePage.scss';
import Container from '../Container/Container';

class HomePage extends React.Component {
  state = {
    isActiveSideRight: 'right'
  }

  handleMouseOver = (side) => (
    this.setState({
      isActiveSideRight: side
    })
  )
  render() {
    const { isActiveSideRight } = this.state;
    return (
      <div className="Section-one">
        <div className="Section-one-fullBg">
          <h1>HELLO<span className="HomePage-dot">.</span></h1>
        </div>
      

          <Container size="sm" className="Homepage-Titles">
          <div className="Airplane">
            <img alt="airplane" src={airplane}
              className={cx({
                "Homepage-japan-plane": isActiveSideRight,
                "Homepage-vancouver-plane": !isActiveSideRight,
              })}
            />
          </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              <span className="Homepage-vancouver-title">
                <h2>To Vancouver</h2>
              </span>
              <span className="Homepage-japan-title">
                <h2>From Japan</h2>
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <p>Now I’m a Vancouver based<br />web designer/developer.</p>
              <p>I was a graphic/web designer<br />in Tokyo.</p>
            </div>
          </Container>
          
       
          {/* {!isActiveSideRight ? ( */}
            {/* <div className="Homepage-bg Homepage-left">
              <div className="Homepage-vancouver">

                <p>Now I’m a Vancouver based<br />web designer/developer.</p>
              </div>
            </div> */}
          {/* ) : ( */}
            {/* <div className="Homepage-bg Homepage-right">
              <div className="Homepage-japan">

                <p>I was a graphic/web designer<br />in Tokyo.</p>
              </div>
            </div> */}
          {/* )} */}
        {/* <div className="Homepage-button-left" onClick={() => this.handleMouseOver(false)} ></div>
        <div className="Homepage-button-right" onClick={() => this.handleMouseOver(true)}></div> */}
      </div>
    )
  }
}

export default HomePage;