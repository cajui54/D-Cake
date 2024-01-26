import styled from "styled-components";


export const ProductGrid = styled.section`
   overflow: hidden;
   width: 95%;
   margin: 0 auto;
   min-height: 100vh;

`
export const Title = styled.div`
   h2, h3, p {
      margin-left: 2rem;
   }
   h2 {
      color: #FBAABB;
      font-size: 7rem;
      font-family: 'Pacifico', cursive;
   }
   h3 {
      font-size: 1.8rem;
      margin-top: -2rem;
      color: #64748b;
   }
   p {
      margin-top: 1rem;
      font-size: 1.5rem;
      color: #94a3b8;
   }
`

export const Container = styled.div `
   width: 95%;
   min-height: 50rem;
   margin: 5rem auto;
`
export const Grid = styled.div`
   width: 100%;
   min-height: 30rem;
   @media screen and (min-width: 700px ) {
      display: grid;
      grid-template-columns: repeat(2, 320px);
      grid-gap: 3rem;
   }
   @media screen and (min-width: 900px) {
      grid-template-columns: repeat(2, 400px);
   }
   @media screen and (min-width: 1000px) {
      grid-template-columns: repeat(2, 450px);
   }
   @media screen and (min-width: 1100px) {
      grid-template-columns: repeat(3, 320px);
   }
`



