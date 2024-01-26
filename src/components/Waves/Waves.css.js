import styled from "styled-components";
import svgWave from '../../assets/svg/wave2.svg';

export const Wave = styled.div`
    position: absolute;
    z-index: -1;
    @media screen and (min-width: 280px) and (max-width: 320px){
        top: -60px;
    }
    top: -80px;
    background: url(${svgWave});
    width: 100%;
    height: 100px;
`