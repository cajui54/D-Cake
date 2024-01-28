import styled from "styled-components";

export const Slideshow = styled.div`
    background-color: #FBAABB;
    height: 100vh;
    width: 100%;
    margin: 5rem auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Title = styled.div`
    position: relative;
    top: 2rem;
    margin: 2rem auto;
    width: 80%;
    h2 {
        color: #fff;
        font-family: 'Pacifico', cursive, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 4rem;
        letter-spacing: .2rem;
    }
    h3 {
        color: #475569;
        font-size: 3rem;
        margin-top: -1.5rem;
    }
`
export const Slide = styled.div`
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    border: 10px solid #fff;
    border-radius: 10px;
    position: relative;
    img {
        display: block;
        width: 100%;
        height: 40rem;
        transition: all 1s ease-in-out;
    }
    button {
        position: absolute;
        top: 50%;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    button svg {
        color: #FFF;
        font-size: 5rem;
        filter: drop-shadow(0 2px 5px black);
    }
    button:nth-child(1) {
        left: 10px;
    }
    button:nth-child(3) {
        right: 10px;
    }
`

export const Menu = styled.div`
    position: relative;
    margin: 5rem auto;
    overflow-x: scroll;
    width: 95%;
    height: 13rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    img {
        margin-left: 2rem;
        width: 10rem;
        border-radius: 10px;
        height: 10rem;
        cursor: pointer;
        box-shadow: 0 0 5px black;
        transition: all .5s ease-in-out;
    }
    img:hover {
        transform: scale(1.2);
    }
`