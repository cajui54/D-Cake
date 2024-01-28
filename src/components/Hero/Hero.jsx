import React, { useState } from 'react';
import * as Style from './Hero.css';
import { slideHero } from './dataSlide/dataSlide';
import SocialBar from '../SocialBar/SocialBar';

const Hero = () => {
  let [index, setIndex] = useState(0);
  
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
            </strong>
            <p>cada doce é feito com muito amor e carinho,pensando sempre em nossos clientes.</p>
          </p>

          <SocialBar/>
        </Style.Article>

    </Style.Hero>
  )
}

export default Hero
