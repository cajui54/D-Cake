import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 100px;
    min-height: 250px;
    background-color: #FBAABB;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;


    .title {
        text-align: center;
    }

    .title h2:first-child{
        color: #fff;
        font-family: 'Pacifico', cursive, 'Franklin Gothic Medium', 'Arial Narrow', Arial;
        font-size: 3rem;
    }
    .title h2:last-child{
        color: #334155;
        margin-top: -10px;
        font-size: 1.2rem;
    }
    .icons-social {
        margin-top: 10px;
    }
    .icons-social a{
        color: #fff;
        font-size: 3rem;
        margin-right: 10px;
    }
    @media screen and (min-width: 900px){
        min-height: 100px;
    }
`