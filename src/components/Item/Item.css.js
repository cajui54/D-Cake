import styled from "styled-components";

export const Item = styled.div`
    width: 100%;
    min-height: 100px;
    box-shadow: 0 0 1px #94a3b8;
    margin: 1rem auto;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding: .5rem;
    img {
        width: 12rem;
        height: 99%;
        margin: .4rem 1rem;
        border-radius: 1rem;
    }
    @media screen and (min-width: 700px ) {
        min-height: 500px;
        flex-direction: column;

        img {
            width: 100%;
            height: 30rem;
        }
    }
    @media screen and (min-width: 1100px) {
        min-height: 400px;
        img {
            height: 20.5rem;
        }
    }
`
export const infoItem = styled.div`
    flex-grow: 1;
    margin-right: .5rem;
    h2, h3, p  {
        margin-left: 1rem;
    }
    h2 {
        color: #FBAABB;
        font-family: 'Pacifico', cursive;
        font-size: 2.5rem;
    }
    h3 {
        margin-top: -.5rem;
        margin-bottom: .5rem;
        color: #64748b;
    }
    P {
        font-size: 1.2rem;
        color: #94a3b8;
    }
    a {
        display: block;
        text-decoration: none;
        background-color: #FBAABB;
        color: #fff;
        text-align: center;
        width: 10rem;
        margin: 1rem 0 0 1rem;
        padding: .5rem;
        border-radius: 5rem;
        cursor: pointer;
    }
    @media screen and (min-width: 700px ) {
        display: flex;
        flex-direction: column;
        h2, h3 {
            text-align: center;
        }
        h2 {
            font-size: 3.5rem;
        }
        h3 {
            font-size: 2.2rem;
        }
        p {
            margin-top: 1rem;
            font-size: 1.4rem;
        }
        a {
            padding: 1rem 0;
            width: 80%;
            margin: 2rem auto;
            font-size: 1.5rem;
        }
    }

    
`