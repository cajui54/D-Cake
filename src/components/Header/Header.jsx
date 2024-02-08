import React from 'react';
import * as Style from './Header.css';
import ButtonBuger from './buttonBurger/ButtonBuger';
import Navbar from './Navbar/Navbar';
import imgLogo from '../../assets/images/logoDeise.png';

const Header = () => {
  return (
    <Style.Header>

        <Style.Logo>
          <h2>DeCakes</h2>
          <h3>Confeitária Artesanal</h3>
        </Style.Logo>

        <ButtonBuger/>
        <Navbar/>
    </Style.Header>
  )
}

export default Header
