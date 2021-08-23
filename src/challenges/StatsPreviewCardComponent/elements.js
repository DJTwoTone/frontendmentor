import styled from "styled-components";
import mobileImg from './assets/image-header-mobile.jpg';
import desktopImg from './assets/image-header-desktop.jpg';

export const Background = styled.div`
    background: hsl(233, 47%, 7%);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 90%;
    border-radius: 20px;
    background: hsl(244, 38%, 16%);
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    background: hsl(277, 64%, 61%) url(${mobileImg}) no-repeat fixed;
    background-size: 100% auto;
    height: 375px;
    

    /* &:before {
        content: '';
        background: hsl(277, 64%, 61%);
    } */

`;

export const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const CardTitle = styled.h3`
    font-size: 2rem;
    color: hsl(0, 0%, 100%);
`;

export const Accent = styled.span`
    color: hsl(277, 64%, 61%);
`;

export const CardText = styled.p`
    color: hsla(0, 0%, 100%, 0.75);
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
`;