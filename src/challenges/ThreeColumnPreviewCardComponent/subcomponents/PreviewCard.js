import React from 'react';
import { Card, CardIcon, CardTitle, CardText, CardBtn } from './elements';

function PreviewCard({ icon, title, text, color}) {
    return (
        <>
            <Card color={color}>
                <CardIcon src={icon} />
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                <CardBtn color={color}>Learn More</CardBtn>
            </Card>
            
        </>
    )
}

export default PreviewCard
