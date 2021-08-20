import React from 'react';
import { Background, CardWrapper, TopImage, SummaryTitle, SummaryText, PlanArea, PlanIcon, PlanDetails, PlanTitle, PlanPrice, ChangePlanLink, PaymentBtn, CancelLink } from './elements';
import topImg from './assets/illustration-hero.svg'
import musicIcon from './assets/icon-music.svg';




function OrderSummaryComponent() {
    return (
        <>
            <Background>
                <CardWrapper>
                    <TopImage src={topImg} />
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryText>
                        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                    </SummaryText>
                    <PlanArea>
                        <PlanIcon src={musicIcon} />
                        <PlanDetails>
                            <PlanTitle>Annual Plan</PlanTitle>
                            <PlanPrice>$59.99/year</PlanPrice>
                        </PlanDetails>
                        <ChangePlanLink>Change</ChangePlanLink>
                    </PlanArea>
                    <PaymentBtn>Proceed to Payment</PaymentBtn>
                    <CancelLink>Canel Order</CancelLink>

                </CardWrapper>
            </Background>
           
            
        </>
    )
}

export default OrderSummaryComponent
