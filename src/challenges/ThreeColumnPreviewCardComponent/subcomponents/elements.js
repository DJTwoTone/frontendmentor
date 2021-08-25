import styled from 'styled-components';

export const Card = styled.div`
    background: ${({color}) => (color)};
    color: hsla(0, 0%, 100%, 0.75);
    padding: 3rem;
`;

export const CardIcon = styled.img`
    
`;

export const CardTitle = styled.h2`
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1.5rem;
`;

export const CardText = styled.p`
    line-height: 1.875rem;
    font-size: 0.9375rem;
    margin-top: 1.5rem;


`;

export const CardBtn = styled.button`
    width: 50%;
    height: 3rem;
    border: 0;
    border-radius: 50px;
    background: hsl(0, 0%, 95%);
    font-size: 0.9375rem;
    color: ${({color}) => (color)};
    margin-top: 1.5rem

`;