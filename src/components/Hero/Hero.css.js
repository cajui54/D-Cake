import styled from "styled-components";

export const Hero = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 1000px) {
        flex-direction: row;
    }
`
export const Banner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    position: relative;
    img {
        z-index: 1;
        width: 60%;
        height: 80%;
    }
    img:nth-child(2), img:nth-child(3), img:nth-child(4) {
        position: absolute;
    }
    img:nth-child(2) {
        height: 13.5rem;
        width: 13.5rem;
        right: 1rem;
        bottom: 0;
    }
    img:nth-child(3) {
        top: 1rem;
        right: -4rem;
        z-index: 0;
    }
    img:nth-child(4) {
        right: 12rem;
        bottom: -1rem;
        height: 8rem;
        width: 8rem;
    }
    @media screen and (max-width: 290px) {
        width: 100%;
        text-align: center;
        h3 {
            font-size: 2.5rem;

        }
    }
    @media screen and (min-width: 500px) {
        img:nth-child(1) {
            margin-top: 5rem;
            width: 500px;
            height: 100%;
        }
    }
    @media screen and (min-width: 700px) {
        width: 100%;
        img:nth-child(2) {
        height: 20rem;
        width: 20rem;
        right: 0;
        }
        img:nth-child(4) {
            right: 12rem;
            height: 20rem;
            width: 20rem;
        }
    }
    @media screen and (min-width: 1000px) {
        width: 50%;

        img:nth-child(2), img:nth-child(3), img:nth-child(4) {
            left: 0;
        }
        img:nth-child(4) {
            height: 20rem;
            width: 20rem;
            left: 10rem;
        }
    }
`
//Article
export const SectionArticle = styled.div`
    margin: 3rem auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    z-index: 1;


    article {
        width: 95%;
        margin: 0 auto;
    }
    p {
        color: #94a3b8;
        font-size: 2rem;
        letter-spacing: .1rem;
        line-height: 3.9rem;
        text-align: center;
    }
    .distak span:nth-child(1){
        font-family: 'Pacifico', cursive, Arial, Helvetica, sans-serif;
        color: #FBAABB;
        font-size: 3rem;
    }

    @media screen and (min-width: 500px) {
        article {
            width: 40rem;
        }
        p {
            font-size: 1.5rem;
            line-height: 2.5rem;
        }
        
    }
    @media screen and (min-width: 700px) {
        width: 600px;
        margin: 3rem auto;
        article {
            width: 100%;
        }
        article strong span{
            color: red;
        }
  

    }
    @media screen and (min-width: 1000px) {
        width: 50%;
        margin-top: 20rem;
        article {
            margin: 1rem auto;
            width: 90%;
            
        }
        p {
            font-size: 2rem;
            text-align: left;   
        }
    }

`
export const SocialBar = styled.div`
    width: 60%;
    height: 4rem;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    a {
        cursor: pointer;
        color: #FBAABB;
        text-decoration: none;
        margin-left: 3rem;
        text-align: center;
        transition: all .5s ease-in-out;
    }
    svg {
        font-size: 5rem;
    }
    svg:hover {
        transform: scale(1.2);
        filter: drop-shadow(5px 0 5px #FBAABB);
    }
    p {
        font-family: 'Oxygen', sans-serif, Arial, Helvetica;
        color: #FBAABB;
        font-size: 1rem;
        font-weight: bold;
        margin-top: -.5rem;
    }
    @media screen and (min-width: 500px) {
        width: 20rem;
        a {
            margin-right: 2rem;
        }
        svg {
            font-size: 4rem;
        }
        p {
            font-size: .9rem;
        }
    }
    @media screen and (min-width: 700px) {
        svg {
            font-size: 6rem;
        }
    }
    @media screen and (min-width: 1000px) {
        margin: 0;
        margin-top: 3rem;
    }
`

