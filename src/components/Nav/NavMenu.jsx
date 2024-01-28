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
      <Link activeClass='activeBar' smooth={true} duration={500} to='moveTop' offset={-55} spy={true} onSetActive={handleSetActive}>
        <BiSolidUpArrowSquare />
        <span>Topo</span>
      </Link>
      
    </Style.Nav>
  )
}

export default NavMenu
