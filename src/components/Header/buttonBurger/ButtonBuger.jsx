import useMenu from '../../../hooks/useMenu'
import * as Style from './ButtonBuger.css'


const ButtonBuger = () => {
    const {menu, handleOpenMenu} = useMenu();
  return (
    <Style.ButtonBuger onClick={handleOpenMenu}>
      <div className={`menu-btn ${menu.classMenu}`}>
        <div className="menu-btn__burger"></div>
      </div>
    </Style.ButtonBuger>
  )
}

export default ButtonBuger
