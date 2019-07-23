import React from 'react';
import menuIcon from '../../images/menu.svg';
import './Header.scss';
import Container from '../Container/Container';

const Header = () => (
    <header className="Header">
      <Container className="Header-container">
        <div className="Header-logo">AYAKO SAYAMA</div>
        <div className="Header-menu-icon"><img alt="Menu Icon" src={menuIcon} /></div>
      </Container>
    </header>
);

export default Header;