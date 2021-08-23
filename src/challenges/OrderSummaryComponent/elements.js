import styled from "styled-components";
import mobileBg from './assets/pattern-background-mobile.svg';
import desktopBg from './assets/pattern-background-desktop.svg';

export const Background = styled.div`
    background: hsl(225, 100%, 94%) url(${mobileBg}) no-repeat fixed top left;
    background-size: 100% auto;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 426px) {
        background-image: url(${desktopBg});
    }
`;

export const CardWrapper = styled.div`
    width: 80%;
    /* height: 20rem; */
    border-radius: 30px;
    box-shadow: 3px 3px black;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 426px) {
        width: 28.125rem;
    }
`;

export const TopImage = styled.img`
    border-radius: 30px 30px 0 0 ;
`;

export const SummaryTitle = styled.h2`
    font-size: 2rem;
    font-weight: 900;
`;

export const SummaryText = styled.p`
    width: 60%;
    text-align: center;
`;

export const PlanArea = styled.div`
    width: 70%;
    border-radius: 30px;
    background: hsl(225, 100%, 98%);
    display: flex;

`;

export const PlanIcon = styled.img`

`;

export const PlanDetails = styled.div`

`;

export const PlanTitle = styled.p`

`;

export const PlanPrice = styled.p`

`;

export const ChangePlanLink = styled.a`

`;

export const PaymentBtn = styled.button`
    width: 70%;
    border-radius: 30px;
    background: hsl(245, 75%, 52%);
`;

export const CancelLink = styled.a`

`;