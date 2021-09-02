import styled from 'styled-components';

export const QandAContainer = styled.div`
    margin: 20px 20px 50px 20px;
    cursor: pointer;
    transition: all 0.5s 0s ease;
    
`;

export const QAndAHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Question = styled.p`
    font-size: 1rem;
    font-weight: ${({isOpen}) => (isOpen ? 'bold' : '')};
`;

export const Answer = styled.p`
    font-size: 1rem;
    display: ${({isOpen}) => (isOpen ? 'intial' : 'none')};
`;


export const ArrowIcon = styled.img`
    width: 20px;
    height: 14px;
    transform: ${({isOpen}) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};

`;