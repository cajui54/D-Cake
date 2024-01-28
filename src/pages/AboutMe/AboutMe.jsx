import React from 'react';
import * as Style from './About.css';
import imgDeise from '../../assets/images/deiseImg.png'
import SocialBar from '../../components/SocialBar/SocialBar';

const AboutMe = () => {
  return (
    <Style.AboutMain id='ancoraContactMe'>
      <Style.ContainerLogo>
        <img src={imgDeise} alt="Logo Deise Bolo"/>
      </Style.ContainerLogo>
      <Style.Article>
        <article>
            <p>
                <span>DCake</span>
                <i> é uma confeitária artesanal especializada na confecção de bolos e doces
                    decorados para festas de aniversários!
                </i>
            </p>
            <SocialBar/>
        </article>
      </Style.Article>
    </Style.AboutMain>
  )
}

export default AboutMe
