import { Box, Button, Card, CardActions, CardContent } from '@material-ui/core'
import React from 'react'
import { FeaturesHeader } from '../Features/FeaturesElements'
import { CardImage, Cards, DExtension, Dots } from './DExtensionElements'

function Extension() {
    return (
        <>
         <DExtension>
            <FeaturesHeader>
                <h1>Download the extension</h1>
                <p>We've got more browsers in the pipeline.
                    Please do let us know if you've got a 
                    favourite you'd like us to prioritize.
                </p>
            </FeaturesHeader>
            <Cards>
                <Card>
                    <CardContent>
                        <CardImage/>
                        <h2>Add to Chrome</h2>
                        <p>Minium version 6.2</p>
                        <Dots/>
                        <CardActions>
                            <Button className="btn" variant="contained" >Add & Install Extension</Button>
                        </CardActions>

                    </CardContent>
                </Card>
                <Box></Box>
            </Cards>
        </DExtension>   
        </>
    )
}

export default Extension
