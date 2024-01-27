import styled from "styled-components";

export const Hero = styled.section`
    min-height: 30rem;
    width: 100%;
    overflow: hidden;

    @media screen and (min-width: 700px) {
        display: flex;
        justify-content: space-between;
    }
    @media screen and (min-width: 800px) {
        margin-top: 13rem;
    }
`
export const ContainerSlide = styled.div`
    width: 100%;
    height: 400px;
    @media screen and (min-width: 700px) {
        width: 40%;
        display: flex;
        justify-content: space-between;
    }
`
export const SlideShow = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    .bg-color {
        position: absolute;
        right: -20rem;
        bottom: 0;
        border-radius: 50%;
        width: 40rem;
        height: 40rem;
        background-color: #FBAABB;
        z-index: -1;
    }
    img {
        position: relative;
        top: 9rem;
        right: -2rem;
        z-index: 1;
        width: 35rem;
        filter: drop-shadow(0 0 5px black);
    }
    @media screen and (max-width: 299px) {
       img {
        top: 13rem;
        right: 2rem;
       }
    }
    @media screen and (min-width: 500px) {
        img {
            right: -10rem;
            top: 8rem;
            width: 40rem;
        }
        
    }
    @media screen and (min-width: 700px) { 
        .bg-color {
            right: 0;
            left: -20rem;
            top: 5rem;
            height: 35rem;
        }
        img {
            right: -1rem;
            top: 13rem;
        }
    }
`
export const Article = styled.article`
    width: 90%;
    min-height: 20rem;
    margin: 2rem auto;

    p {
        font-size: 2rem;
        color: #9ca3af;
        line-height: 3.5rem;
    }
    .distak span{
        color: #FBAABB; 
        font-size: 5rem;
        font-family: 'Pacifico', cursive, Arial, Helvetica, sans-serif;
    }
    .distak i {
        font-size: 1.8rem;
    }

    @media screen and (min-width: 700px) { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        width: 50%;
        margin-top: 15rem;
        margin-left: 5rem;
        .distak span{
            font-size: 5rem;
        }
    }

`
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


