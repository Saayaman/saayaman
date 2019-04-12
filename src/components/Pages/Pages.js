import React from 'react';
import ReactPageScroller from "react-page-scroller";
import Header from '../Header/Header';
import './Pages.scss';
import Container from '../Container/Container';

class Pages extends React.Component {
  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }
  render(){
    return(
      <>
      <Header goToPage={this.goToPage} />
      <div className="Page">
        <div className="Header-menu">
          <ul className="Header-menu-list">
            <li>
              <a src="#section1" onClick={() => this.goToPage(1)}><span className="msk"><span>HOME</span></span></a>
            </li>
            <li>ABOUT ME</li>
            <li>MY WORKS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="Section-container">
          <ReactPageScroller containerWidth={'100%'}	animationTimer={700} ref={c => this.reactPageScroller = c}>
            <div className="Section-one">
              <div className="Section-one-fullBg">
                <h1>HELLO.</h1>
              </div>
              <div className="Section-one-bg"></div>
            </div>
            <div className="section-two">Section2</div>
            <div className="section-three">Section3</div>
          </ReactPageScroller>
        </div>
      </div>
      </>
    );
  }
} 

export default Pages;