import React from 'react';
import { ChallengeContainer } from '../../globalComponents/globalComponents.elements';
import { FAQAccordionCard } from '../../challenges';
import { StarterImages } from '../../globalComponents';


const imgCache = {};

function importAll(r) {
    r.keys().forEach((key) => (imgCache[key] = r(key)));
}
importAll(require.context("./assets", false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(imgCache).map(module => module[1].default);

function FAQAccordionCardPage() {
    return (
        <>
            <StarterImages images={images}/>
            

            <ChallengeContainer>
                <FAQAccordionCard />
            </ChallengeContainer>
        </>
    )
}

export default FAQAccordionCardPage;
