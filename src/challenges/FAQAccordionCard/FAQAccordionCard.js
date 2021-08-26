import React from 'react';
import { Background, Card, CardImg, Illustration, Shadow, Box, CardTitle, QandAArea, QandA, Question, Answer, ArrowIcon } from './elements';

function FAQAccordionCard() {
    return (
        <>
            <Background>
                <Card>
                    <CardImg>
                        <Illustration />
                        <Shadow />
                        <Box />
                    </CardImg>
                    <CardTitle>FAQ</CardTitle>
                    <QandAArea>
                        <QandA>
                            <Question>
                            How many team members can I invite?
                            </Question>
                            <ArrowIcon></ArrowIcon>
                            <Answer>
                            You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
                            </Answer>
                        </QandA>
                    </QandAArea>
                </Card>
            </Background>
        
            
        </>
    )
}

export default FAQAccordionCard
