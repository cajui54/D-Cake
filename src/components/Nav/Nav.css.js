import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    z-index: 5;
    padding: 10px;
    display: flex;
    .activeBar {
        transform: scale(1.2);
    }
    a {
        cursor: pointer;
        background-color: #FBAABB;
        color: #fff;
        margin-top: 10px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid #fff;
        
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: all .5s ease-in-out;
    }
    a:hover {
        transform: scale(1.2);
    }
    a svg {
        font-size: 2.5rem;
    }
    @media screen and (min-width: 900px){
        display: none;
    }
`