import { Accordion, Button } from '@material-ui/core'
import React from 'react'
import { FeaturesHeader } from '../Features/FeaturesElements'
import { FAQSection } from './FAQElements'

function FAQ() {
    return (
        <>
        <FAQSection>
        <FeaturesHeader>
                <h1>Features</h1>
                <p>Our aim is to make it 
                    quick and easy for you to access
                    your favourite websites. Your bookmarks
                    sync between your devices so you
                    can access them on the go.</p>
            </FeaturesHeader>
            <FAQContent>
                <Accordion>

                </Accordion>
                <Button variant="contained" color='primary'>More info</Button>
            </FAQContent>
        </FAQSection>
            
        </>
    )
}

export default FAQ
