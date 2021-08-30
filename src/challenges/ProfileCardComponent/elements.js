import styled from "styled-components";
import topBg from './assets/bg-pattern-card.svg';
import top from './assets/bg-pattern-top.svg';
import bottom from './assets/bg-pattern-bottom.svg';


export const BackgroundWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: max(100%, 375px);

    @media screen and (min-width: 768px) {
        width: max(100%, 1440px);
    }
    background-color: hsl(185, 75%, 39%);
    background-image: url(${top}), url(${bottom});
    background-position: top -50vh left -20vh, bottom -60vh right -20vh;
    background-repeat: no-repeat;
    overflow: hidden;
    height: 100vh;
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
`;

export const Card = styled.div`
    position: relative;
    height: 30rem;
    width: 25rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px black;
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
    font-size: 1.5rem;
`;

export const Age = styled.p`
    margin-left: .5rem;
    font-size: 1.5rem;
`;

export const Location = styled.p`
    margin-top: 1rem;
`;


export const CardFooter = styled.div`
    width: 100%;
    height: 8rem;
    border-top: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;


