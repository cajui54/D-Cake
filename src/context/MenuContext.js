import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({children}) => {
    const menuClosed = {open: false, classMenu: '', navbar: 'navbarOpen'};
    const menuOpend = {open: true, classMenu: 'openMenu', navbar: ''};
    let [menu, setMenu] = useState({...menuClosed});

    const handleOpenMenu = () => {
        if(!menu.open) {
            setMenu({...menuOpend});
        } else {
            setMenu({...menuClosed});
        }
    }

    return (
        <MenuContext.Provider value={{menu, handleOpenMenu}}>
            {children}
        </MenuContext.Provider>
    )
}
