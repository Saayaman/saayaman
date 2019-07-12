import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';
import cx from 'classnames';

const Container = ({ children, className, size }) => (
  <div className={cx("Container", {
    [`Container--${size}`] : !!size,
    [className]: !!className,
  })}>
    {children}
  </div>
);

Container.protoTypes = {
  size: PropTypes.string,
}

Container.defaultProps = {
  size: 'lg',
}

export default Container;