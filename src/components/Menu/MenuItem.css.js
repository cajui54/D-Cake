import styled from "styled-components";

export const Menu = styled.nav`

    margin: 100px auto;
    width: 100%;
    min-height: 10rem;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 7rem;
        min-height: 7rem;
        position: relative;
        cursor: pointer;
    }
    span {
        color: #FBAABB;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Roboto', sans-serif, 'Franklin Gothic Medium', 'Arial Narrow', Arial;
    }
    img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        margin-bottom: 1rem;
        z-index: 1;
    }
    .clip {
        position: absolute;
        z-index: 0;
        top: -2rem;
        left: .3rem;
        transform: scale(.8);
        border-radius: .5rem;
        width: 9rem;
        height: 8rem;
        background-color: #FBAABB;
    }
    a:hover img {
        transform: scale(1.3);
    }

    @media screen and (max-width: 290px) {
        overflow-x: scroll;
        height: 20rem;

        a {
            margin: 0 2rem;
        }
    }
    @media screen and (min-width: 500px) {
        margin-top: 140px;
        width: 500px;
        .clip {
            top: -5rem;
            left: -2rem;
            width: 9rem;
            height: 9rem; 
        }
        img {
            width: 10rem;
            height: 10rem;
        }
        span {
            font-size: 1.5rem;
        }
    }
    @media screen and (min-height: 900px) {
        margin-top: 20rem;
    }
    @media screen and (min-width: 1000px) {
        margin: 15rem;
    }
 
`