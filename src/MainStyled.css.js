import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
/*
font-family: 'Oxygen', sans-serif;
font-family: 'Pacifico', cursive;
font-family: 'Permanent Marker', cursive;
font-family: 'Roboto', sans-serif;
colorlogo: grey #9ca3af, purple #9333ea;pink #FBAABB;
*/
    html {
        font-size: 62.5%;
    }
    * {
        padding: 0;
        margin: 0;  
    }
    body {
        width: 100%;
        font-family: 'Roboto', sans-serif, Arial, Helvetica;
    }
    main {
        min-height: 100vh;
        overflow-x: hidden;
    }
    .bgBottom {
        background: linear-gradient(to top, #fff 5%, transparent);
        position: absolute;
        top: 15px;
        left: 0;
        height: 100%;
        width: 100%;
    }
    // menu
    .navbarOpen {
        right: -100% !important; 
        transition: all 1s ease-in-out;
    }
    @media screen and (min-width: 600px){
        .navbar0 {
            right: 0% !important;
        }
    }
`;

export default GlobalStyled;