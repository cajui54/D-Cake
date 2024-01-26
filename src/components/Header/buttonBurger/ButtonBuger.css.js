import styled from "styled-components";

export const ButtonBuger = styled.div`
    cursor: pointer;
    .menu-btn {
        position: relative;
        width: 5rem;
        height: 5rem;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .5s ease-in-out;
    }
    .menu-btn__burger {
        width: 45px;
        height: 6px;
        background-color: #FBAABB;
        border-radius: 3px;
        box-shadow: 0 2px 5px #f5d0fe;
        transition: all .5s ease-in-out;
    }
    .menu-btn__burger::before, .menu-btn__burger::after {
        position: absolute;
        content: '';
        width: 45px;
        height: 6px;
        background-color: #FBAABB;
        border-radius: 3px;
        box-shadow: 0 2px 5px #f5d0fe;
        transition: all .5s ease-in-out;
    }
    .menu-btn__burger::before {
        transform: translateY(-10px);
    }
    .menu-btn__burger::after {
        transform: translateY(10px);
    }
    .menu-btn.openMenu .menu-btn__burger {
        transform: translateX(-50px);
        background-color: transparent;
        box-shadow: none;
    }
    .menu-btn.openMenu .menu-btn__burger::before {
        transform: rotate(45deg) translate(35px, -35px);
    }
    .menu-btn.openMenu .menu-btn__burger::after {
        transform: rotate(-45deg) translate(35px, 35px);
    }

    @media screen and (min-width: 600px) {
        display: none;
        
    }
   
`