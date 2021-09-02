import React, { useState } from 'react';
import { Background, Card, CardImg, Illustration, Shadow, Box, CardTitle, QandAArea } from './elements';
import QAndA from './subcomponents/QAndA';
import { faq } from './assets/faq'

function FAQAccordionCard() {

    const [faqs, setFaqs] = useState(faq)


 

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
                        {faqs.map(({question, answer}, idx) => (
                            <QAndA key={idx} question={question} answer={answer} />
                        )) 
                        }
                    </QandAArea>
                </Card>
            </Background>
        
            
        </>
    )
}

export default FAQAccordionCard
