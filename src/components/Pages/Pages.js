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
      <div className="Page">
        <Header goToPage={this.goToPage} />
        <div className="Section-container">
          <ReactPageScroller animationTimer={700} ref={c => this.reactPageScroller = c}>
            <div className="section-one">Section1</div>
            <div className="section-two">Section2</div>
            <div className="section-three">Section3</div>
          </ReactPageScroller>
        </div>
      </div>
    );
  }
} 

export default Pages;