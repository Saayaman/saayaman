import React from 'react';
import cx from 'classnames';
import airplane from '../../images/airplane.svg';
import './HomePage.scss';
import Container from '../Container/Container';

class HomePage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isActiveSideRight: true
      })
    }, 1500)
  }

  state = {
    isActiveSideRight: false
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
          <h1>{isActiveSideRight ? <span className="slideUp">HELLO</span> : 'こんにちは'  }<span className={cx('HomePage-dot', {
            'HomePage-dot-right': isActiveSideRight
          })}>.</span></h1>
        </div>
        <div className={cx('Section-one-green', {
          'Section-one-green--right': isActiveSideRight
        })} />

      

          <Container size="sm" className="Homepage-Titles">
          
            <div className="Homepage-title-wrapper">
              <span className="Homepage-vancouver-title">
                <h2>From Japan</h2>
                <div className={cx("Airplane-dotted", {
                  'Airplane-dotted--right': isActiveSideRight
                })} />
                <div className="Airplane">
                  <img alt="airplane" src={airplane}
                    className={cx({
                      "Airplane-japan": !isActiveSideRight,
                      "Airplane-vancouver": isActiveSideRight,
                    })}
                  />
                </div>
              </span>
              
              <span className="Homepage-japan-title">
                {isActiveSideRight && <h2 className="slideUp">To Vancouver</h2>}
              </span>
            </div>
            <div className="Homepage-hero-text">
              <p className="Homepage-japan-text">I was a graphic/web designer<br />in Tokyo.</p>
              
              {isActiveSideRight && <p className="Homepage-vancouver-text slideUp">Now I’m a Vancouver based<br /> frontend developer.</p>}
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