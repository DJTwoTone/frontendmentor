import React from 'react';
import { StatsPreviewCardComponent } from '../../challenges';
import { ChallengeContainer } from '../../globalComponents/globalComponents.elements';
import { StarterImages } from '../../globalComponents';

const imgCache = {};

function importAll(r) {
    r.keys().forEach((key) => (imgCache[key] = r(key)));
}
importAll(require.context("./assets", false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(imgCache).map(module => module[1].default);


function StatsPreviewCardComponentPage() {
    return (
        <>

            <StarterImages images={images}/>

            <ChallengeContainer>
                <StatsPreviewCardComponent />
            </ChallengeContainer>
        </>
    )
}

export default StatsPreviewCardComponentPage
