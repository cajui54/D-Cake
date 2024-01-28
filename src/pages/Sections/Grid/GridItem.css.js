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
        font-size: 1.5rem;
        margin-top: -2rem;
        color: #4b5563;
    }

`

export const ItemContainer = styled.section`
    min-height: 30rem;
    margin: 5rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    a {
        text-decoration: none;
        display: block;
        color: #fff;
        font-size: 2rem;
        width: 20rem;
        text-align: center;
        border: 2px solid #fff;
        padding: 1rem 0;
        margin: 1rem auto;
        cursor: pointer;
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
