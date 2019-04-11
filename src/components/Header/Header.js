import React from 'react';
import menuIcon from '../../images/menu.svg';
import './Header.scss';
import Container from '../Container/Container';

const Header = ({ goToPage }) => (
    <header className="Header">
      <Container className="Header-container">
        <div className="Header-logo">THIS IS HEADER</div>
        <div className="Header-menu">
          <div className="Header-menu-icon"><img alt="Menu Icon" src={menuIcon} /></div>
          <ul className="Header-menu-list">
            <li>
              <a src="#section1" onClick={() => goToPage(1)}><span className="msk"><span>HOME</span></span></a>
            </li>
            <li>ABOUT ME</li>
            <li>MY WORKS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </Container>
    </header>
);

export default Header;