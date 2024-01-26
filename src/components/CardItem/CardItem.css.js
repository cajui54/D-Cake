import styled from "styled-components";


export const CardItem = styled.div`
    overflow: hidden;
    background-color: #fff;
    margin: 30px auto;
    width: 80%;
    height: 55rem;
    border-radius: 10px;
    box-shadow: 0 0 2px #64748b;

    .container-img {
        position: relative;
        width: 95%;
        margin: 10px auto;
        height: 60%;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 0 2px #64748b;
    }
    .container-img  img {
        width: 100%;
        height: 101%;
    }
    p {
        width: 80%;
        margin: 10px auto;
        font-size: 1.5rem;
        text-align: center;
        color: #94a3b8;
    }
    a {
        cursor: pointer;
        margin: 15px auto;
        text-align: center;
        display: block;
        width: 70%;
        padding: 10px 0;
        border-radius: 10px;
        color: #FBAABB;
        text-decoration: none;
        font-size: 2rem;
        border: 2px solid #FBAABB;
    }
    a:hover {
        background-color: #FBAABB;
        color: #fff;
    }
    a svg {
        margin-right: 10px;
    }
    @media screen and (min-width: 600px) {
      width: 400px;
    }
    @media screen and (min-width: 1000px) {
        width: 350px;
        height: 50rem;
        .container-img {
            height: 50%;
        }
    }
`

export const TitleCard = styled.div`
    width: 90%;
    margin: 5px auto;
    text-align: center;

    h2 {
        color: #FBAABB;
        font-size: 3.5rem;
        font-family: 'Pacifico', cursive, Arial, Helvetica, sans-serif;
    }
    h3 {
        font-size: 2rem;
        margin-top: -15px;
    }

`