import * as Style from './Navbar.css';
import { Link, animateScroll} from 'react-scroll';
import useMenu from '../../../hooks/useMenu';
import { GiCupcake } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";
import { BiSolidHomeHeart } from "react-icons/bi";
import { MdOutlineContactPhone } from "react-icons/md";




const Navbar = () => {
  const {menu, handleOpenMenu} = useMenu();

  const handleSetActive = (to) => to;
  const handleClickCloseMenu = () => handleOpenMenu();
  
  return (
    <Style.Navbar className={`${menu.navbar} navbar0`}>
      <Link onClick={handleClickCloseMenu} activeClass='active' onSetActive={handleSetActive} to='moveTop' spy={true} smooth={true} offset={-150} duration={500}>
        <BiSolidHomeHeart />
        Início
      </Link>

      <Link onClick={handleClickCloseMenu} activeClass='active' onSetActive={handleSetActive} to='moveCake' spy={true} smooth={true} duration={500}>
        <GiCupcake />
         Bolos
      </Link>

      <Link onClick={handleClickCloseMenu} activeClass='active' offset={-50} onSetActive={handleSetActive} to='moveCandy' spy={true} smooth={true} duration={500}>
        <LuCandy />
        Doces
      </Link>

      <Link onClick={handleClickCloseMenu} activeClass='active' onSetActive={handleSetActive} to='moveTop' spy={true} smooth={true} duration={500}>
      <MdOutlineContactPhone />
        Contatos
      </Link>
    </Style.Navbar>
  )
}

export default Navbar
