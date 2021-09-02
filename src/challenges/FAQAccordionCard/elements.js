import styled from "styled-components";
import mobileIllustration from './assets/illustration-woman-online-mobile.svg';
import desktopIllustration from './assets/illustration-woman-online-desktop.svg';
import mobileShadow from './assets/bg-pattern-mobile.svg';
import desktopShadow from './assets/bg-pattern-desktop.svg';


export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, hsl(273, 75%, 66%) 0%, hsl(240, 73%, 65%) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 90%;
    background: white;
    border-radius: 35px;
    font-family: 'Kumbh Sans', sans-serif;
`;

export const CardImg = styled.div`
    width: 100%;
    height: 180px;
    position: relative;
    `;

export const Illustration = styled.div`
    position: absolute;
    background: url(${mobileIllustration}) no-repeat top center;
    /* background-size: 100% auto; */
    width: 90%;
    height: 100%;
    top: -110px;
`;

export const Shadow = styled.div`
    /* position: absolute; */
    background: url(${mobileShadow}) no-repeat top center;
    width: 100%;
    height: 100%;
    /* top: -90px; */

`;

export const Box = styled.div`

`;

export const CardTitle = styled.h1`
    font-size: 3rem;
    text-align: center;
`;

export const QandAArea = styled.div`

`;


