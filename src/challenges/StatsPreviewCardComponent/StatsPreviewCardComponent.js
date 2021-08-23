import React from 'react'
import { Background, Card, Header, BodyWrapper, CardTitle, Accent, CardText, Footer } from './elements';
import FooterItem from './subcomponents/FooterItem';

function StatsPreviewCardComponent() {
    return (
        <div>
            <Background>
                <Card>
                    <Header />
                    <BodyWrapper>
                        <CardTitle>
                            Get <Accent>insights</Accent> the help your business grow.
                        </CardTitle>
                        <CardText>
                            Discover the benefits od data amalytics and make better decisions regarding revenue, customer experience, and overall efficiency. 
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
