import styled from "styled-components";

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    @media only screen and (min-width: 426px) {
        /* width: 6rem; */
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

export const Number = styled.p`
    font-weight: 700;
    font-size: 2rem;
    color: hsl(0, 0%, 100%);
    `;

export const Category = styled.p`
color: hsla(0, 0%, 100%, 0.6);
    margin-top: .5rem;
`;