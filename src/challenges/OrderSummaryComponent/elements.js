import styled from "styled-components";
import mobileBg from './assets/pattern-background-mobile.svg';
import desktopBg from './assets/pattern-background-desktop.svg';

export const Background = styled.div`
    background: hsl(225, 100%, 94%) no-repeat top center;
    background-image: url(${mobileBg});
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

    font-family: 'Red Hat Display', sans-serif;
    color: hsl(223, 47%, 23%);

`;

export const TopImage = styled.img`
    border-radius: 30px 30px 0 0;
    width: 100%;
    height: auto;
`;

export const SummaryTitle = styled.h2`
    font-size: 1.7rem;
    font-weight: 900;
    margin-top: 2rem;
`;

export const SummaryText = styled.p`
    width: 70%;
    text-align: center;
    margin-top: 2rem;
    line-height: 1.5rem;
`;

export const PlanArea = styled.div`
    width: 70%;
    border-radius: 30px;
    background: hsl(225, 100%, 98%);
    display: flex;
    margin-top: 2rem;
    justify-content: space-around;
    align-items: center;

`;

export const PlanIcon = styled.img`
    margin-right: 1rem;
`;

export const PlanDetails = styled.div`
    margin-right: auto;
    line-height: 1.5rem;
`;

export const PlanTitle = styled.p`
    font-weight: 900;
`;

export const PlanPrice = styled.p`

`;

export const ChangePlanLink = styled.a`
    color: hsl(223, 47%, 23%);
    font-weight: 700;
    cursor: pointer;
    &:hover {
        color: hsl(224, 23%, 55%);
    }

`;

export const PaymentBtn = styled.button`
    width: 70%;
    border-radius: 10px;
    background: hsl(223, 47%, 23%);
    margin-top: 2rem;
    color: hsl(225, 100%, 98%);
    height: 2rem;
    cursor: pointer;

    &:hover {
        background: hsl(224, 23%, 55%);
    }

`;

export const CancelLink = styled.a`
    cursor: pointer;
    margin-top: 2rem;
    margin-bottom: 3rem;

    &:hover {
        font-weight: 700;
    }

`;