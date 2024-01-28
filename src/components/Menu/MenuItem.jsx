import React from 'react';
import { Link } from 'react-scroll';
import * as Style from './MenuItem.css';
import imgCake from '../../assets/images/cake02.png';
import imgCandy from '../../assets/images/candys/candy10.jpg';
import imgPaoDeMel from '../../assets/images/candys/withoutBgCandy.png';
import imgBrigadeiro from '../../assets/images/candys/briga-removebg-preview.png';
import imgDeise from '../../assets/images/deiseImg.png';

const MenuItem = () => {
  const handleSetActive = (to) => to;
  return (
    <Style.Menu>
      <Link activeClass='active' onSetActive={handleSetActive} to='moveCake' spy={true} smooth={true} offset={-10} duration={500}>
        <div className='clip'></div>
        <img src={imgCake} alt="Bolo Decorado Artesanal"/>
        <span>Bolos</span>
      </Link>

      <Link activeClass='active' onSetActive={handleSetActive} to='ancoraBrigadeiro' spy={true} smooth={true} offset={-20} duration={500}>
        <div className='clip'></div>
        <img src={imgBrigadeiro} alt="Brigadeiro artesanal"/>
         <span>Brigadeiro</span>
      </Link>

      <Link activeClass='active' onSetActive={handleSetActive} to='moveCandy' spy={true} smooth={true} offset={10} duration={500}>
        <div className='clip'></div>
        <img src={imgPaoDeMel} alt="Pão de Mel artesanal"/>
        <span>Doces</span>
      </Link>
      
      <Link activeClass='active' onSetActive={handleSetActive} to='ancoraContactMe' spy={true} smooth={true} offset={10} duration={500}>
        <div className='clip'></div>
        <img src={imgDeise} alt="profile image Deise"/>
        <span>Contatos</span>
      </Link>

    </Style.Menu>
  )
}

export default MenuItem
