import styled from "styled-components";
import topBg from './assets/bg-pattern-card.svg';
import top from './assets/bg-pattern-top.svg';
import bottom from './assets/bg-pattern-bottom.svg';


export const BackgroundWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem 0 10rem 0;
    width: max(100%, 375px);
    background-image: url(${top}), url(${bottom});
    background-position: top -50vh left -170vw, bottom -50vh right -170vw;
    @media screen and (min-width: 768px) {
        width: max(100%, 1440px);
        background-position:  top 250% left -60%, bottom 350% right -60%;
    }
    background-color: hsl(185, 75%, 39%);
    background-repeat: no-repeat;
    overflow: hidden;

`;

export const TopCircle = styled.img`
    position: absolute;
    width: 80%;
    height: auto;
    top: -100%;
    left: -25%;
`;

export const BottomCircle = styled.img`
    position: absolute;
    width: 80%;
    height: auto;
    bottom: -100%;
    right: -25%;
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 10rem; */
    font-family: 'Kumbh Sans', sans-serif;
`;

export const Card = styled.div`
    position: relative;
    width: 90vw;
    height: 30rem;

    @media screen and (min-width: 768px) {
        width: 30rem;
    }

    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 5px hsl(229, 23%, 23%);
    background: white;
    `;

export const CardTop = styled.div`
    height: 10rem;
    width: 100%;
    background: url(${topBg}) ;
    border-radius: 20px 20px 0 0;
    background-size: contain;
`;

export const CardImg = styled.img`
    position: absolute;
    top: 5rem;
    width: 7rem;
    border-radius: 50%;
    border: solid 5px white;
`;

export const BioWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 15rem;
`;

export const NameAgeWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const Name = styled.p`
    font-weight: bold;
    font-size: 1.7rem;
`;

export const Age = styled.p`
    margin-left: .5rem;
    font-size: 1.3rem;
    color: hsl(0, 0%, 59%)
`;

export const Location = styled.p`
    margin-top: 1rem;
    color: hsl(0, 0%, 59%)

`;


export const CardFooter = styled.div`
    width: 100%;
    height: 8rem;
    border-top: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;


