import styled from "styled-components";
import imgCake01 from '../../assets/images/candys/candy13.jpg';

export const Paralax = styled.div`
    width: 100%;
    height: 200px;
    //background: linear-gradient(to top, #fff 30%,  rgba(220,220,220,.8), transparent), url(${imgCake01});
    //background-attachment: fixed;
    img {
        position: absolute;
    }
    .bgParalax {
        width: 100%;
        height: 500px;
        background-color: #fff;
    }
    @media screen and (min-width: 1000px) {
        //background-repeat: no-repeat;
        //background-size: 100%;
        height: 350px;
    }
`
