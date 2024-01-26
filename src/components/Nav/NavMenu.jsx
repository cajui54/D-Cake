import React from 'react';
import { Link, animateScroll} from 'react-scroll';
import * as Style from '../Nav/Nav.css';
import { BiSolidUpArrowSquare } from "react-icons/bi";
import { GiCupcake } from "react-icons/gi";
import { LuIceCream2 } from "react-icons/lu";


const NavMenu = () => {

  const handleSetActive = (to) => console.log(to);

  return (
    <Style.Nav>
      <Link activeClass='activeBar' smooth={true} duration={500} to='moveTop' spy={true} onSetActive={handleSetActive}>
        <BiSolidUpArrowSquare />
        <span>Topo</span>
      </Link>

      <Link activeClass='activeBar' smooth={true} duration={500} to='moveCake' offset={50} spy={true} onSetActive={handleSetActive}>
        <GiCupcake/>
        <span>Bolos</span>
      </Link>
      
      <Link activeClass='activeBar' smooth={true} duration={500} to='moveCandy' spy={true} onSetActive={handleSetActive}>
        <LuIceCream2/>
        <span>Doces</span>
      </Link>
      
    </Style.Nav>
  )
}

export default NavMenu
