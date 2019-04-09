import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Icon({ children, position, display, className, ...props }) {
  return (
    <svg
      className={cx('Icon', className, {
        [`Icon--position-${position}`]: position,
        [`Icon--display-${display}`]: display,
      })}
      {...props}
    >
      {children}
    </svg>
  );
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
  display: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  position: 'default',
  display: 'inlineBlock',
  className: null,
};

export default Icon;
