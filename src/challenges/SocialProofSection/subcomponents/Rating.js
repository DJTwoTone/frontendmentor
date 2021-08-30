import React from 'react';
import { RatingBox, StarArea, Star, RatingText } from './Rating.elements'

function Rating({rating, source}) {
    return (
        <RatingBox>
            <StarArea>
                {[...Array(rating)].map((x) => {
                    return <Star key={x} />
                }) }
            </StarArea>
            <RatingText>
                Rated {rating} Stars in {source}
            </RatingText>
            
        </RatingBox>
    )
}

export default Rating
