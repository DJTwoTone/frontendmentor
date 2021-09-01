import styled from 'styled-components';

export const Card = styled.div`
    background: ${({color}) => (color)};
    color: hsla(0, 0%, 100%, 0.75);
    /* padding: 3rem; */
`;

export const CardIcon = styled.img`
    margin: 3rem 0 0 2rem;
    width: 6rem;

    @media only screen and (min-width: 426px) {
        margin-left: 3rem;
    }
    
`;

export const CardTitle = styled.h2`
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 700;
    margin: 1.5rem 0 0 2rem;
    font-family: 'Big Shoulders Display', cursive;

    @media only screen and (min-width: 426px) {
        margin-left: 3rem;
    }

`;

export const CardText = styled.p`
    line-height: 1.875rem;
    font-size: 0.9375rem;
    margin: 1.5rem 6rem 0 2rem;
    font-family: 'Lexend Deca', sans-serif;

    @media only screen and (min-width: 426px) {
        margin-left: 3rem;
    }
`;

export const CardBtn = styled.button`
    width: 50%;
    height: 3.5rem;
    border: 0;
    border-radius: 50px;
    background: hsl(0, 0%, 95%);
    font-size: 0.9375rem;
    color: ${({color}) => (color)};
    margin: 1.5rem 0 3rem 2rem;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: bold;

    @media only screen and (min-width: 426px) {
        margin-left: 3rem;

        &:hover {
            border: 3px solid white;
            background: ${({color}) => (color)};
            color: white;
        }
    }

`;