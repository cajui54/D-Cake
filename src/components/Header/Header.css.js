import styled from "styled-components";

export const Header = styled.header`
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    @media screen and (min-width: 900px){
        width: 100%;
        background-color: #fff;
        position: fixed;
    }
`
export const Logo = styled.div`
    margin: 1rem;
    h2 {
        font-family: 'Pacifico', cursive, Arial, Helvetica, sans-serif;
        color: #FBAABB;
        font-size: 3.2rem;
    }
    h3 {
        color: #9ca3af;
        margin-top: -1.5rem;
        transform: scale(.9);
    }
`