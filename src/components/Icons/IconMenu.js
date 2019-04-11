import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from 'constants/icons.js';
import Icon from './Icon.js';

function IconMenu({ width, height, color, ...props }) {
  return (
    <Icon width={width} height={height} viewBox="0 0 16 16" {...props}>
      <title>menu</title>
      <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
    </Icon>
  );
}

IconMenu.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

IconMenu.defaultProps = {
  width: 16,
  height: 16,
  color: COLORS.GREY9,
};

export default IconMenu;
