import { Box, Button, Card, CardActions, CardContent } from '@material-ui/core'
import React from 'react'
import { FeaturesHeader } from '../Features/FeaturesElements'
import { CardImage, Cards, DExtension, Dots } from './DExtensionElements'
import chrome from '../../assets/logo-chrome.svg';
import dotsimg from '../../assets/bg-dots.svg';

function Extension() {
    return (
        <>
         <DExtension>
            <FeaturesHeader style={{textAlign:"center"}}>
                <h1>Download the extension</h1>
                <p style={{textAlign:"center"}}>We've got more browsers in the pipeline.
                    Please do let us know if you've got a 
                    favourite you'd like us to prioritize.
                </p>
            </FeaturesHeader>
            <Cards>
                <Card className="card" >
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
                <Card className="card" id="card2" >
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
                <Card className="card" >
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
                
            </Cards>
        </DExtension>   
        </>
    )
}

export default Extension
