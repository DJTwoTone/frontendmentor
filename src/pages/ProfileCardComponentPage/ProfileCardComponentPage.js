import React from 'react'
import { ChallengeContainer } from '../../globalComponents/globalComponents.elements';
import { StarterImages } from '../../globalComponents';
import { ProfileCardComponent } from '../../challenges';
// import { importImages } from '../../helpers/importImages';

const imgCache = {};

function importAll(r) {
    r.keys().forEach((key) => (imgCache[key] = r(key)));
}
importAll(require.context("./assets", false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(imgCache).map(module => module[1].default);

// console.log('import img test', importImages())


function ProfileCardComponentPage() {
    
    
    return (
        <>
            <StarterImages images={images}/>
            <ChallengeContainer>
                <ProfileCardComponent />
            </ChallengeContainer>
            
        </>
    )
}

export default ProfileCardComponentPage;
