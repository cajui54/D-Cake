import styled from "styled-components";

export const Hero = styled.section`
    display: flex;
    flex-direction: column;
 
    @media screen and (min-width: 700px) {
        flex-direction: row-reverse;
        align-items: center;
    }

    
`
export const Banner = styled.div`
    
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    position: relative;
    img {
        z-index: 1;
        width: 100%;
        height: 80%;
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
        width: 40%;
        margin: 1.5rem;
    }
    @media screen and (min-width: 1000px) {
        margin-left: 0;
        margin-right: 2rem;
    }
`
//Article
export const Titles = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: left;
    margin-top: -7rem;
    h2 {
        font-family: 'Pacifico', cursive, 'Franklin Gothic Medium', 'Arial Narrow', Arial;
        font-size: 6rem;
        color: #FBAABB;
    }
    h3 {
        color: #9ca3af;
        font-size: 2.5rem;
        margin-top: -2.5rem;
    }
  
    @media screen and (min-width: 500px) {
        text-align: center;
        margin-top: .2rem;
        h2 {
            font-size: 7rem;
        }
        h3 {
            font-size: 3rem;
        }
    }
    @media screen and (min-width: 700px) {
        margin-top: 7rem;
        flex-direction: row-reverse;
        align-items: center;
        h2 {
            font-size: 8rem;
        }
        h3 {
            font-size: 2.5rem;
        }
    }
    @media screen and (min-width: 1000px) {
        width: 90%;
        text-align: left;
    }

`


export const SectionArticle = styled.div`
    margin: 1rem auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    z-index: 1;

    article {
        width: 90%;
        margin: 1.8rem auto;
    }
    p {
        color: #94a3b8;
        font-size: 2rem;
        letter-spacing: .1rem;
        line-height: 3rem;
        text-align: center;
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
        width: 50%;
        margin-right: 1rem;

        article p {
            font-size: 1.8rem;
            width: 90%;
            line-height: 3rem;
        }
    }
    @media screen and (min-width: 1000px) {
        width: 700px;
        margin-right: 0;
        article {
            margin: 1rem auto;
            width: 90%;
            
        }
        p {
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

