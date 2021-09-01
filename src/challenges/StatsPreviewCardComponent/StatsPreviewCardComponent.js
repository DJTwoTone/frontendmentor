import React from 'react'
import { Background, Card, Header, HeaderImg, HeaderOverlay, BodyWrapper, CardTitle, Accent, CardText, Footer } from './elements';
import FooterItem from './subcomponents/FooterItem';
import mobileImg from './assets/image-header-mobile.jpg';


function StatsPreviewCardComponent() {
    return (
        <div>
            <Background>
                <Card>
                    <Header>
                        <HeaderImg src={mobileImg} />
                        <HeaderOverlay></HeaderOverlay>
                    </Header>
                    <BodyWrapper>
                        <CardTitle>
                            Get <Accent>insights</Accent> that help your business grow.
                        </CardTitle>
                        <CardText>
                            Discover the benefits of data amalytics and make better decisions regarding revenue, customer experience, and overall efficiency. 
                        </CardText>
                        <Footer>
                            <FooterItem num={"10k+"} category={"COMPANIES"} />
                            <FooterItem num={"314"} category={"TEMPLATES"} />
                            <FooterItem num={"12M+"} category={"QUERIES"} />
                        </Footer>
                    </BodyWrapper>
                </Card>
            
            </Background>   
        </div>
    )
}

export default StatsPreviewCardComponent
