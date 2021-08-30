import React from 'react'
import { TestimonialBox, TestimonialText, UserImg, UserName, VerificationStatus } from './Testimonal.elements'

function Testimonal({ image, userName, verified, testimonial }) {
    return (
        <TestimonialBox>
            <UserImg src={image} />
            <UserName>{userName}</UserName>
            {verified ? 
            <VerificationStatus>Verified Buyer</VerificationStatus> :
            ''}
            <TestimonialText>{testimonial}</TestimonialText>
        </TestimonialBox>
    )
}

export default Testimonal
