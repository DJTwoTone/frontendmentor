import React from 'react';
import {Card, TopImg, Heading, Text, Footer, FooterImg, FooterInfo, FooterName, FooterDate, ShareBtn} from './elements';
import topimg from './assets/drawers.jpg';
import michelle from './assets/avatar-michelle.jpg';
import {IoArrowRedoOutline} from 'react-icons/io5'


function ArticlePreviewComponent() {
    return (
        <Card>
            <TopImg src={topimg} />
            <Heading>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </Heading>
            <Text>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
            </Text>
            <Footer>
                <FooterImg src={michelle} />
                <FooterInfo>
                    <FooterName>Michelle Appleton</FooterName>
                    <FooterDate>28 Jun 2020</FooterDate>
                </FooterInfo>
                <ShareBtn><IoArrowRedoOutline /></ShareBtn>
            </Footer>

            
        </Card>
    )
}

export default ArticlePreviewComponent
