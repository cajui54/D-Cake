import styled from "styled-components";

export const Navbar = styled.nav`
    .active {
        background-color: #fff;
        color: #FBAABB;
    }

    background-color: #FBAABB;
    position: absolute;
    width: 100%;
    min-height: 90vh;
    top: 6rem;
    right: 0;
    z-index: 2;
    transition: all .5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        width: 95%;
        padding: 30px 0;
        font-size: 2rem;
        font-family: 'Oxygen', sans-serif, Arial, Helvetica;
        font-weight: bold;
        color: #fff;
        border: .5px solid #fff;
        border-radius: 5px;
        margin-top: 5px;
    }
    a svg {
        margin-right: 10px;
    }
    a:hover {
        background-color: #9333ea;
        opacity: .5;
    }
    @media screen and (min-width: 600px){
        background-color: transparent;
        right: 0 !important;
        position: relative;
        top: 0;
        width: 80%;
        min-height: 5rem;
        flex-direction: row;
        justify-content: space-around;
        
        a {
            padding: 5px 0;
            font-size: 1.5rem;
            color: #FBAABB;
            width: 200px;
            transition: all .5s ease-in-out;
            border: none;
            margin-right: 5px;
        }
        a:hover {
            background-color: transparent;
            opacity: 1;
            
        }
        .active {
            color: #9ca3af;
        }
    }
    @media screen and (min-width: 800px) {
        width: 600px;
    }
`