import styled from "styled-components";

export const About = styled.article`
    min-height: 120vh;
    margin-bottom: 100px;

    .gridAbout {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

export const ImageContainer = styled.div`
    margin: 0 auto;
    
    img {
        margin-left: -50px;
        width: 250px;
        height: 250px;
    }
    @media screen and (min-width: 900px) {
        img {
            transform: scale(1.8) translateX(50px);
        }
    }

`

export const Article = styled.div`
    background-color: transparent;
    width: 50%;
    .container-titles {
        margin-bottom: 15px;
    }
    .container-titles h2:first-child {
        color: #FBAABB;
        font-family: 'Pacifico', cursive, Arial, Helvetica, sans-serif;
        font-size: 4rem;
    }
    .container-titles h2:last-child {
        color: #64748b;
        margin-top: -15px;
    }
    p {
        font-size: 1.2rem;
        color: #94a3b8;
        letter-spacing: .1rem;
        line-height: 20px;
    }
    p span {
        color: #FBAABB;
        font-family: 'Pacifico', cursive, Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
    }
    @media screen and (min-width: 900px){
        .container-titles h2:first-child {
            font-size: 7rem;
        }
        .container-titles h2:last-child {
            font-size: 3rem;
        }

        p {
                width: 400px;
                font-size: 1.5rem;
                line-height: 3.5rem;
        }
    }
`