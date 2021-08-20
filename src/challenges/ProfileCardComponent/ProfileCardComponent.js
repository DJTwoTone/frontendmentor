import React from 'react'
import { BackgroundWrapper, TopCircle, BottomCircle, CardWrapper, Card, CardTop, CardImg,
BioWrapper, NameAgeWrapper,
Name, Age, Location, CardFooter  } from './elements';
import FooterItem  from './subcomponents/FooterItem';
import headshot from './assets/image-victor.jpg';
import top from './assets/bg-pattern-top.svg';
import bottom from './assets/bg-pattern-bottom.svg';


function ProfileCardComponent() {


    return (
        <>

            <BackgroundWrapper>
                <TopCircle src={top} />;
                <BottomCircle src={bottom} />
                <CardWrapper>
                    <Card>
                        <CardTop />
                        <CardImg src={headshot} />
                        <BioWrapper>
                            <NameAgeWrapper>
                                <Name>Victor Crest</Name>
                                <Age>26</Age>
                            </NameAgeWrapper>
                            <Location>London</Location>
                        </BioWrapper>
                        <CardFooter>
                            <FooterItem category={"Followers"} num={"80"}/>
                            <FooterItem category={"Likes"} num={"803"}/>
                            <FooterItem category={"Photos"} num={"1.4"}/>
                        </CardFooter>
                    </Card>
                </CardWrapper>
            </BackgroundWrapper>
        </>
    )
}

export default ProfileCardComponent;
