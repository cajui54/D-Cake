import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #FBAABB;
    min-height: 25rem;
    border-radius: 10px;
    margin-bottom: 0;
`
export const ContainerLogo = styled.div`
    width: 80%;
    margin: 2rem auto;

    img {
        display: block;
        margin: 1rem auto;
        width: 50%;
    }
    h2 {
        text-align: center;
        color: #fff;
    }
    @media screen and (min-width: 700px){
        img {
            width: 10rem;
        }
        h2 {
            font-size: 2rem;
        }
    }
`

export const Address = styled.address`
    width: 80%;
    margin: 1rem auto;
    ul {
        display: flex;
        justify-content: space-around;
        padding: 1rem;
        font-size: 1.5rem;
        color: #ffd700;
        font-weight: bold;
    }
    a {
        color: #ffd700;
        text-decoration: none;
    }
`