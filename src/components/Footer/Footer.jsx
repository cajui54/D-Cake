import React from 'react';
import imgLogo from '../../assets/images/logoDeise.png'
import * as Style from './Footer.css'
import { PiWhatsappLogoDuotone} from "react-icons/pi";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <Style.Footer>
        <div className="title">
            <h2>DeCakes</h2>
            <h2>Confeitária Artesanal</h2>
        </div>

      <div className='icons-social'>
        <a href="https://wa.me/5511973828299" target="_blank">
            <PiWhatsappLogoDuotone/>
        </a>

        <a href="https://www.instagram.com/decakes_confeitaria_artesanal/" target="_blank">
            <TiSocialInstagram/>
        </a>
      </div>
    </Style.Footer>
  )
}

export default Footer
