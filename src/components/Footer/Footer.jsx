import React from 'react';
import imgLogo from '../../assets/images/logoDeise.png'
import * as Style from './Footer.css'


const Footer = () => {
  return (
    <Style.Footer>
      <Style.ContainerLogo>
        <img src={imgLogo} alt="Logo de um bolo e doces" />
        <h2>Cada doce é feito com muito amor e carinho</h2>
      </Style.ContainerLogo>
      
      <Style.Address>
        <ul>
          <li><a href="https://wa.me/5511973828299" target="_blank">(11) 97382-8299</a></li>
          <li>Mauá - SP</li>
        </ul>
      </Style.Address>
    </Style.Footer>
  )
}

export default Footer
