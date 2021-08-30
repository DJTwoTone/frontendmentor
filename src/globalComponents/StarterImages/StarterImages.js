import React from 'react';
import { ImageArea, StarterImg } from './StarterImages.elements'

// import {} from '../../../'

function StarterImages({ images }) {

    console.log(images)

    return (
        <ImageArea>
            {images.map((img) => (
                <StarterImg src={img} />
            ))}
            
        </ImageArea>
    )
}

export default StarterImages;