import React from 'react';
import ReactPageScroller from "react-page-scroller";
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './Pages.scss';
import HomePage from '../HomePage/HomePage';

class Pages extends React.Component {

  state = {
    currentPage: 0,
  }
  goToPage = (pageNumber) => {
    console.log(pageNumber)
    this.reactPageScroller.goToPage(pageNumber);
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
      <Header />
      <div className="Page">
        <Menu goToPage={this.goToPage} currentPage={currentPage} />
        <div className="Section-container">
          <ReactPageScroller
            containerWidth={'100%'}
            animationTimer={1000}
            ref={c => this.reactPageScroller = c}
            pageOnChange={this.pageOnChange}
          >
            <HomePage />
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