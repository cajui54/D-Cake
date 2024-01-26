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
    margin-left: 10px;
    width: 60px;
    height: 60px;
    img {
        width: 100%;
        height: 100%;
    }
    
`