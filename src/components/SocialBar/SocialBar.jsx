import React from 'react'
import { PiWhatsappLogoDuotone} from "react-icons/pi";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareFacebook } from "react-icons/fa6";
import * as Style from './SocialBar.css'
function SocialBar() {
  return (
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
  )
}

export default SocialBar
