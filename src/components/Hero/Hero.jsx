import React, { useRef, useState } from 'react';
import * as Style from './Hero.css';
import imgBrigadeiro from '../../assets/images/candys/briga-removebg-preview.png';
import imgCake from '../../assets/images/cake02.png';
import imgBgCandy01 from '../../assets/images/candys/withoutBgCandy.png';
import imgDeise from '../../assets/images/logoDeise.png';
import { PiWhatsappLogoDuotone} from "react-icons/pi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareFacebook } from "react-icons/fa6";


const Hero = () => {
  let [index, setIndex] = useState(0);
  
  
  const slideHero = [
    {img: imgCake, altInfo: 'bolo de aniverário'},
    {img: imgBrigadeiro, altInfo: 'Brigadeiro'},
    {img: imgBgCandy01, altInfo: 'Pão de Mél'},
    {img: imgDeise, altInfo: 'Logo confeitária artesanal'},
  ]
  
  setTimeout(() => {
      if(index < (slideHero.length - 1)) {
        setIndex(index+=1);
      } else {
        setIndex(0);
      }
      console.log('Hero');
    }, [5000])
    
  return (
    <Style.Hero id='moveTop'>

      <Style.ContainerSlide>
        <Style.SlideShow>
          <img src={slideHero[index].img} alt={slideHero[index].altInfo} />
          <div className='bg-color'></div>
        </Style.SlideShow>
      </Style.ContainerSlide>

      <Style.Article>
          <p>
            <strong className='distak'>
            <span>DCakes</span>
            <i> é uma confeitária artesanal </i>
          </strong>
            especializada na confecção de bolos decorados e doces ,
            cada doce é feito com muito amor e carinho,pensando sempre em nossos clientes.
          </p>

          <Style.SocialBar>
          <a href="https://wa.me/5511973828299" target="_blank">
              <PiWhatsappLogoDuotone/>
              <p>What's</p>
          </a>

          <a href="https://www.instagram.com/decakes_confeitaria_artesanal/" target="_blank">
            <TiSocialInstagram/>
            <p>Intagram</p>
          </a>

          <a href="https://www.facebook.com/deise.aquino.779" target="_blank">
          <FaSquareFacebook />
            <p>Facebook</p>
          </a>
        </Style.SocialBar>

        </Style.Article>

    </Style.Hero>
  )
}

export default Hero
