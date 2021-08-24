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

    @media only screen and (min-width: 426px) {
        flex-direction: row-reverse;
    }
`;

export const Header = styled.div`
    position: relative;
    width: 100%;
`;

export const HeaderImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 20px 20px 0 0;

    @media only screen and (min-width: 426px) {
        border-radius: 0 20px 20px 0;
    }
`;

export const HeaderOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(277, 64%, 61%, .50);
    
    
    @media only screen and (min-width: 426px) {
        border-radius: 0 20px 20px 0;
    }
`;


export const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media only screen and (min-width: 426px) {
        margin: 0 3rem;
    }
`;

export const CardTitle = styled.h3`
    margin: 2rem 2rem 2rem 1rem;
    font-size: 2.5rem;
    color: hsl(0, 0%, 100%);
    text-align: center;

    @media only screen and (min-width: 426px) {
        text-align: left;
        margin: 0 0 2rem 0;

    }
`;

export const Accent = styled.span`
    color: hsl(277, 64%, 61%);
`;

export const CardText = styled.p`
    color: hsla(0, 0%, 100%, 0.75);
    font-size: 1.3rem;
    text-align: center;
    line-height: 1.5rem;
    margin: 0 2rem 2rem 2rem;

    @media only screen and (min-width: 426px) {
        text-align: left;
        margin: 0 4rem 3rem 0;
        line-height: 2rem;
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 426px) {
        flex-direction: row;
        justify-content: space-between;
        margin-right: 6rem;
    
    }
`;