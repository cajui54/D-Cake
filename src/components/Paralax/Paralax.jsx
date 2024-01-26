import React from 'react';
import * as Style from './Paralax.css'
import svgWave from '../../assets/svg/wave1.svg';

const Paralax = () => {
  return (
    <Style.Paralax>
      <img src={svgWave} alt='wave section' />

    </Style.Paralax>
  )
}

export default Paralax
