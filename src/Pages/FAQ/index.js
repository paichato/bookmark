import { Accordion, AccordionDetails, AccordionSummary, Button } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import React from 'react'
import { FeaturesHeader } from '../Features/FeaturesElements'
import { FAQContent, FAQSection } from './FAQElements'

function FAQ() {
    return (
        <>
        <FAQSection>
        <FeaturesHeader>
                <h1>Frequently Asked QUestions</h1>
                <p>Here are some of our FAQs.If
                    you have any other questions you'd like
                    answered please feel free to email us.
                </p>
            </FeaturesHeader>
            <FAQContent>
                <Accordion className="accordion">
                    <AccordionSummary className="accordion" expandIcon={<ExpandMore className="exp" color="primary"/> }>
              <h4>What is Bookmark</h4>
          </AccordionSummary>
          <AccordionDetails>
              <p>bla bla bla</p>
          </AccordionDetails>

                </Accordion>
                <Button variant="contained" color='primary'>More info</Button>
            </FAQContent>
        </FAQSection>
            
        </>
    )
}

export default FAQ
