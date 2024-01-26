import React from 'react';
import * as Style from './Header.css';
import ButtonBuger from './buttonBurger/ButtonBuger';
import Navbar from './Navbar/Navbar';
import imgLogo from '../../assets/images/logoDeise.png';

const Header = () => {
  return (
    <Style.Header>

        <Style.Logo>
            <a href='google' target='_blank'>
                <img src={imgLogo} alt="logo de bolo" />
            </a>
        </Style.Logo>

        <ButtonBuger/>
        <Navbar/>
    </Style.Header>
  )
}

export default Header
