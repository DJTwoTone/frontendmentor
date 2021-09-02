import React, { useState } from 'react';
import { QandAContainer, QAndAHeader, Question, Answer, ArrowIcon } from './QAndA.elements';
import arrow from '../assets/icon-arrow-down.svg';

function QAndA({ question, answer }) {

    const [isOpen, setIsOpen] = useState(false);

    function toggleQAndA() {
        
        setIsOpen(!isOpen)
    }

    return (
        <>
        <QandAContainer onClick={toggleQAndA}>
            <QAndAHeader>
                <Question isOpen={isOpen}>{question}</Question>
                <ArrowIcon isOpen={isOpen} src={arrow} />
            </QAndAHeader>
            <Answer isOpen={isOpen}>{answer}</Answer>
        </QandAContainer>
            
        </>
    )
}

export default QAndA
