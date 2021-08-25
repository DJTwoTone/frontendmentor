import styled from "styled-components";


export const PreviewCardContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;

    @media only screen and (min-width: 426px) {
        flex-direction: row;
    }
`;