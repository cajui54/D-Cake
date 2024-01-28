import styled from "styled-components";

export const SocialBar = styled.div `
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 3rem auto;

    a {
        text-align: center;
        text-decoration: none;
        color: #FBAABB;
    }
    svg {
        font-size: 4rem;
        transition: all .5s ease-in-out;
    }
    a p {
        margin-top: -.9rem;
        font-size: 1rem;
        color: #FBAABB;
        font-weight: bold;
    }
    a:hover svg {
        transform: scale(1.2);
    }
`