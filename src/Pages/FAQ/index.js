import { Accordion, AccordionDetails, AccordionSummary, Button } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import React from 'react'
import { FeaturesHeader } from '../Features/FeaturesElements'
import { FAQContent, FAQSection } from './FAQElements'

function FAQ() {
    return (
        <>
        <FAQSection id="faq" data-aos="fade-up" data-aos-duration="1000">
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
              <h4>What is Bookmark?</h4>
          </AccordionSummary>
          <AccordionDetails>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum.</p>
          </AccordionDetails>

                </Accordion>

                {/* other accordion */}
                <Accordion className="accordion">
                    <AccordionSummary className="accordion" expandIcon={<ExpandMore className="exp" color="primary"/> }>
              <h4>How can I request a new Browser?</h4>
          </AccordionSummary>
          <AccordionDetails>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum.</p>
          </AccordionDetails>

                </Accordion>

                 {/* other accordion */}
                 <Accordion className="accordion">
                    <AccordionSummary className="accordion" expandIcon={<ExpandMore className="exp" color="primary"/> }>
              <h4>Is there a mobile app?</h4>
          </AccordionSummary>
          <AccordionDetails>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum.</p>
          </AccordionDetails>

                </Accordion>

                 {/* other accordion */}
                 <Accordion className="accordion" id="last-acc">
                    <AccordionSummary className="accordion" expandIcon={<ExpandMore className="exp" color="primary"/> }>
              <h4>What about other Chromium browsers</h4>
          </AccordionSummary>
          <AccordionDetails>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum.</p>
          </AccordionDetails>

                </Accordion>
                <Button variant="contained" color='primary'>More info</Button>
            </FAQContent>
        </FAQSection>
            
        </>
    )
}

export default FAQ
