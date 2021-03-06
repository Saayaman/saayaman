
import React from 'react';
import { header } from '../../constants/header.js';
import cx from 'classnames';
import './Menu.scss';

const Menu = ({ goToPage, currentPage}) => {
  console.log('currentapage', currentPage);
  return (
    <div className="Header-menu">
    <ul className="Header-menu-list">
      {header.map(menu => (
        <li>
          <a className={cx('Menu-link', {
              "msk" : currentPage === menu.pageNum,
              "msk-green": currentPage !== 0,
            })} onClick={() => goToPage(menu.pageNum)}>
            {/* <span className={cx({
              "msk" : currentPage === menu.pageNum,
              "msk-green": currentPage !== 0,
            })}> */}
              <span>{menu.text}</span>
            {/* </span> */}
          </a>
        </li>
      ))}
    </ul>
  </div>
  )
 
}

export default Menu;