import { Box, Button, Card, CardActions, CardContent } from '@material-ui/core'
import React from 'react'
import { FeaturesHeader } from '../Features/FeaturesElements'
import { CardImage, Cards, CardsContainer, DExtension, Dots } from './DExtensionElements'
import chrome from '../../assets/logo-chrome.svg';
import dotsimg from '../../assets/bg-dots.svg';
import firefox from '../../assets/logo-firefox.svg';
import opera from '../../assets/logo-opera.svg';
import Aos from 'aos';

function Extension() {
    
    return (
        <>
         <DExtension id="extension" data-aos="fade-up" data-aos-duration="600" data-aos-once="false">
            <FeaturesHeader style={{textAlign:"center"}}>
                <h1>Download the extension</h1>
                <p style={{textAlign:"center"}}>We've got more browsers in the pipeline.
                    Please do let us know if you've got a 
                    favourite you'd like us to prioritize.
                </p>
            </FeaturesHeader>
            <CardsContainer>
            <Cards>
                <Card className="card" data-aos="fade-up" data-aos-delay="300" data-aos-once="false" >
                    <CardContent className="cardz">
                        <CardImage src={chrome} alt="logo-chrome"/>
                        <h2>Add to Chrome</h2>
                        <p>Minium version 6.2</p>
                        <Dots src={dotsimg}/>
                        <CardActions>
                            <Button className="btn" variant="contained" >Add & Install Extension</Button>
                        </CardActions>

                    </CardContent>
                    
                </Card>


                {/* Card2 */}
                <Card className="card" id="card2" data-aos="fade-up" data-aos-delay="500" data-aos-once="false" >
                    <CardContent className="cardz">
                        <CardImage src={firefox} alt="logo-chrome"/>
                        <h2>Add to Firfox</h2>
                        <p>Minium version 5.5</p>
                        <Dots src={dotsimg}/>
                        <CardActions>
                            <Button className="btn" variant="contained" >Add & Install Extension</Button>
                        </CardActions>

                    </CardContent>
                    
                </Card>
                <Card className="card" id="card3" data-aos="fade-up" data-aos-delay="700" data-aos-once="false" >
                    <CardContent className="cardz">
                        <CardImage src={opera} alt="logo-chrome"/>
                        <h2>Add to Opera</h2>
                        <p>Minium version 4.6</p>
                        <Dots src={dotsimg}/>
                        <CardActions>
                            <Button className="btn" variant="contained" >Add & Install Extension</Button>
                        </CardActions>

                    </CardContent>
                    
                </Card>
                
            </Cards>
            </CardsContainer>
        </DExtension>   
        </>
    )
}

export default Extension
