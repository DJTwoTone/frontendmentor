import React from 'react'
import { ItemWrapper, Number, Category } from './elements'


function FooterItem({category, num}) {
    return (
        <>
            <ItemWrapper>
                <Number>{num}K</Number>
                <Category>{category}</Category>
            </ItemWrapper>
            
        </>
    )
}

export default FooterItem
