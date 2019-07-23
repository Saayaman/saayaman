import React from 'react';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import './SectionThree.scss';

const SectionThree = () => (
  <SectionWrapper
    leftNode={
      <div>
       hiiii
      </div>
    }
    rightNode={
      <div className="SectionThree-right"><h1>Works.</h1></div>
    }
  />
)

export default SectionThree;
