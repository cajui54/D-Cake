import styled from "styled-components";

export const CandySection = styled.section`
    background-color: #fff;
    min-height: 100vh;
    position: relative;
`

export const Titles = styled.div`
    width: 80%;
    margin: 50px auto;
    h2 {
        color: #FBAABB;
        font-family: 'Pacifico', cursive;
        font-size: 7rem;
    }
    h3 {
        color: #64748b;
        font-size: 2.3rem;
        margin-top: -33px;
        margin-left: 5px;
    }
`

export const GridItem = styled.div`
   position: relative;
   width: 100%;
   min-height: 100px;
   margin-top: 100px;

   @media screen and (min-width: 800px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);    
   }
   @media screen and (min-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);   
      grid-gap: 10px; 
   }
`

