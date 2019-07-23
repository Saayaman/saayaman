import React from 'react';
import './SectionWrapper.scss';

const SectionWrapper = ({ rightNode, leftNode }) => (
  <div className="SectionWrapper">
    <div className="SectionWrapper-left">
      {leftNode}
    </div>
    <div className="SectionWrapper-right">
      {rightNode}
    </div>
</div>
);


export default SectionWrapper;
