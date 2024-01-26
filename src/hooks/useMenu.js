import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const useMenu = () => {
    const context = useContext(MenuContext);

    if(!context) window.alert('Não há context!');

  return context;
}

export default useMenu
