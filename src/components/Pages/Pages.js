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
        <ReactPageScroller animationTimer={700} ref={c => this.reactPageScroller = c}>
          <Container className="Section-container">
           <div className="section-one">Section1</div>
          </Container>
          <div className="section-two">Section2</div>
          <div className="section-three">Section3</div>
        </ReactPageScroller>
      </>
    );
  }
} 

export default Pages;