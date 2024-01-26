import React from 'react';
import * as Style from './Hero.css';
import imgCake from '../../assets/images/cake02.png';
import imgBgCandy01 from '../../assets/images/candys/withoutBgCandy.png';
import imgDeise from '../../assets/images/deiseImg.png';
import { PiWhatsappLogoDuotone} from "react-icons/pi";
import { TiSocialInstagram } from "react-icons/ti";

const Hero = () => {
  return (
    <Style.Hero id='moveTop'>

      <Style.Banner>
          <img src={imgDeise} alt="logo miss deise bolos" />
      </Style.Banner>

      <Style.SectionArticle>
        <Style.Titles>
          <h2>D-Cakes</h2>
          <h3>Confeitária Artesanal</h3>
        </Style.Titles>
        
        <article>
          <p>
            Especializada na confecção de bolos decorados e doces ,
            cada doce é feito com muito amor e carinho,pensando sempre em nossos clientes.
          </p>
        </article>

        <Style.SocialBar>
          <a href="https://wa.me/5511973828299" target="_blank">
              <PiWhatsappLogoDuotone/>
              <p>What's</p>
          </a>

          <a href="https://www.instagram.com/decakes_confeitaria_artesanal/" target="_blank">
            <TiSocialInstagram/>
            <p>Intagram</p>
          </a>
        </Style.SocialBar>
      </Style.SectionArticle>

    </Style.Hero>
  )
}

export default Hero
