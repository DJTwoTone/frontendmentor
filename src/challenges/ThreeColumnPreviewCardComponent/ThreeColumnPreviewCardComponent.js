import React from 'react'
import { PreviewCardContainer } from './elements';
import PreviewCard from './subcomponents/PreviewCard';
import { sedans, suvs, luxury } from './assets/cardData';


function ThreeColumnPreviewCardComponent() {
    return (
        <>
            <PreviewCardContainer>
                <PreviewCard {...sedans} />
                <PreviewCard {...suvs} />
                <PreviewCard {...luxury} />

            </PreviewCardContainer>
            
        </>
    )
}

export default ThreeColumnPreviewCardComponent;
