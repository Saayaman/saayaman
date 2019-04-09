import React from 'react';
import './Container.scss';
import cx from 'classnames';

const Container = ({ children, className }) => (
  <div className={cx("Container", className)}>
    {children}
  </div>
);

export default Container;