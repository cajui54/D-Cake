import styled from "styled-components";

export const AboutMain = styled.section`
    @media screen and (min-width: 700px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`
export const ContainerLogo = styled.div`
    width: 90%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 80%;
    }
    @media screen and (min-width: 700px) {
        width: 40%;
        margin: 3rem 0;
        img {
            width: 100%;
        }
    }
`
export const Article = styled.div`
    min-height: 30rem;
    width: 90%;
    margin: 3rem auto;
    article span {
        font-family: 'Pacifico', cursive;
        font-size: 5rem;
        color: #FBAABB;
        letter-spacing: .5rem;
    }
    p {
        color: #9ca3af;
        font-size: 2rem;
        line-height: 4rem;
    }
    @media screen and (min-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
        
        article {
            margin-top: 18rem;
        }
    }
`