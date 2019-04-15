import React from 'react';
import ReactPageScroller from "react-page-scroller";
import cx from 'classnames';
import Header from '../Header/Header';
import { header } from '../../constants/header.js';
import './Pages.scss';

class Pages extends React.Component {

  state = {
    currentPage: 0,
  }
  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
    this.pageOnChange(pageNumber)
  }

  pageOnChange = (pageNumber) => {
    this.setState({
      currentPage: pageNumber - 1
    })
  }
  render(){
    const { currentPage } = this.state;
    return(
      <>
      <Header goToPage={this.goToPage} />
      <div className="Page">
        <div className="Header-menu">
          <ul className="Header-menu-list">
            {header.map(menu => (
              <li>
                <a src="#section1" onClick={() => this.goToPage(menu.pageNum)}>
                  <span className={cx({
                    "msk" : currentPage === menu.pageNum 
                  })}>
                    <span>{menu.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="Section-container">
          <ReactPageScroller
            containerWidth={'100%'}
            animationTimer={700}
            ref={c => this.reactPageScroller = c}
            pageOnChange={this.pageOnChange}
          >
            <div className="Section-one">
              <div className="Section-one-fullBg">
                <h1>HELLO.</h1>
              </div>
              <div className="Section-one-bg"></div>
            </div>
            <div className="section-two">Section2</div>
            <div className="section-three">Section3</div>
            <div className="section-four">Section4</div>

          </ReactPageScroller>
        </div>
      </div>
      </>
    );
  }
} 

export default Pages;