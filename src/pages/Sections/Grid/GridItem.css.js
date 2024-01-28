import styled from "styled-components";

export const GridMain = styled.div`
    width: 95%;
    min-height: 30rem;
    margin: 5rem auto;
`
export const TitlesContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    h2 {
        font-family: 'Pacifico', cursive, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #fff;
        font-size: 6rem;
    }
    h3 {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-left: 12rem;
        font-size: 1.8rem;
        margin-top: -2rem;
        color: #4b5563;
    }
    @media screen and (max-width: 299px) {
        h3 {
            margin-left: 1rem;
            margin-top: 1rem;
        }
    }

`

export const ItemContainer = styled.section`
    min-height: 30rem;
    margin: 5rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    @media screen and (max-width: 299px) {
        grid-template-columns: repeat(1, 1fr);
        
    }
    @media screen and (min-width: 700px) {
        grid-template-columns: repeat(3, 1fr);
    }
`
export const Item = styled.div`
    padding: .5rem;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;
    img {
        width: 90%;
        height: 16rem;
    }
    h2 {
        display: none;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin-top: 0rem;
        font-size: 2rem;
        color: #FBAABB;
    }
`

export const Side = styled.aside`
    img {
        display: block;
        width: 90%;
        margin: 1rem auto;
        border-radius: 5px;
        border: 3px solid #fff;
        box-shadow: 0 0 5px #334155;
    }
    a {
        text-decoration: none;
        display: block;
        color: #fff;
        font-size: 2rem;
        width: 20rem;
        text-align: center;
        border: 2px solid #fff;
        padding: 1rem 0;
        margin: 3rem auto;
        border-radius: 5px;
        cursor: pointer;
    }
    article {
        width: 90%;
        margin: 1rem auto;
    }
    p {
        text-align: center;
        line-height: 4rem;
        word-spacing: .4rem;
        letter-spacing: .1rem;
        font-size: 1.8rem;
        color: #fff;
    }
    span {
        color: #334155;
        font-weight: bold;
        font-size: 2rem;
        font-family: 'Pacifico', cursive, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    @media screen and (min-width: 700px) {
        img {
            width: 500px;
        }
        article {
            width: 500px;
        }
        p {
            font-size: 2.5rem;
        }
        span {
            font-size: 3rem;
        }
    }
    @media screen and (min-width: 1024px) {
        display: flex;
        article {
            margin-top: 8rem;
        }
    }
`


