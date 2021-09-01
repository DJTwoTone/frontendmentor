import styled from "styled-components";


export const PreviewCardContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 400px;

    @media only screen and (min-width: 426px) {
        flex-direction: row;
        margin-top: 0;
        width: 80%
    }
`;