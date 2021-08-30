import React from 'react';
import { Background, Hero, HeroTitle, HeroText, RatingSection, TestimonialSection } from './elements';

import Rating from './subcomponents/Rating';
import Testimonal from './subcomponents/Testimonal';

import { testimonialData } from './assets/testimonialData'

function SocialProofSection() {
    return (
        <Background>
            <Hero>
                <HeroTitle>10,000+ of our users love our products.</HeroTitle>
                <HeroText>
                    We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
                </HeroText>
            </Hero>
            <RatingSection>
                <Rating rating={5} source={'Reviews'}/>
                <Rating rating={5} source={'Report Guru'}/>
                <Rating rating={5} source={'BestTech'}/>
            </RatingSection>
            <TestimonialSection>
                <Testimonal {...testimonialData.anne}/>
                <Testimonal {...testimonialData.colton}/>
                <Testimonal {...testimonialData.irene}/>
            </TestimonialSection>
            
        </Background>
    )
}

export default SocialProofSection
