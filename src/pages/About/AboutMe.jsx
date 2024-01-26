import React from 'react';
import * as Style from './About.css';
import imgDeise from '../../assets/images/deiseImg.png'

const AboutMe = () => {
  return (
    <Style.About>
        <div className="gridAbout">
            <Style.ImageContainer>
                <img src={imgDeise} alt="mulher fazendo bolo" />
            </Style.ImageContainer>

            <Style.Article>
                <div className='container-titles'>
                    <h2>DeCakes</h2>
                    <h2>Confeitária Artesanal</h2>
                </div>

                <p>
                    <span>DeCakes</span> é uma confeitária artesanal, especializada em bolos decorados e diversos
                    tipos de doces, como cones trufados, pão de mel, brigadeiro etc..
                    
                </p>
            </Style.Article>
        </div>
    </Style.About>
  )
}

export default AboutMe
