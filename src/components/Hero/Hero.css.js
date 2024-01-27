import styled from "styled-components";

export const Hero = styled.section`
    min-height: 30rem;
    width: 100%;
    overflow-x: hidden;
`
export const ContainerSlide = styled.div`
    width: 100%;
    height: 400px;
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
        width: 45rem;
        height: 40rem;
        background-color: #FBAABB;
        z-index: -1;
    }
    img {
        position: relative;
        top: 5rem;
        right: 2rem;
        z-index: 1;
        width: 39rem;
    }

`
export const Article = styled.article`
    width: 90%;
    min-height: 20rem;
    margin: 2rem auto;

    p {
        font-size: 1.8rem;
        color: #9ca3af;
        line-height: 2.5rem;
    }
    .distak span{
        color: #FBAABB; 
        font-size: 2.8rem;
        font-family: 'Pacifico', cursive, Arial, Helvetica, sans-serif;
    }
    .distak i {
        font-size: 1.8rem;
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


