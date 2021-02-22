import { Box, Button, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { FeaturesBody, FeaturesHeader, FeaturesSection, SBLeft, SBLImage, SBRight, SimpleBookmark } from './FeaturesElements'
import {twitterTabsStylesHook} from '@mui-treasury/styles/tabs';
import { LeftSection, LFButtons, LFH1, LFP } from '../Hero/HeroElemnts';
import tab1 from '../../assets/illustration-features-tab-1.svg';
import tab2 from '../../assets/illustration-features-tab-2.svg';
import tab3 from '../../assets/illustration-features-tab-3.svg';

function Features() {

    //Component of tabs-> tabs containers
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
      
      //each tab content function to scroll
      function a11yProps(index) {
        return {
          id: `scrollable-force-tab-${index}`,
          'aria-controls': `scrollable-force-tabpanel-${index}`,
        };
      }


    const [value, setvalue] = useState(0);
    // const tabStyles=twitterTabsStylesHook.useTabs();
    // const tabItemStyles=twitterTabsStylesHook.useTabItem();

    const handleChange = (event, newValue) => {
        setvalue( newValue);
    };
    return (
        <>
        <FeaturesSection id="features" data-aos="fade-up" data-aos-duration="1000" >
            <FeaturesHeader>
                <h1>Features</h1>
                <p>Our aim is to make it 
                    quick and easy for you to access
                    your favourite websites. Your bookmarks
                    sync between your devices so you
                    can access them on the go.</p>
            </FeaturesHeader>
            <FeaturesBody>
                
                
                <Tabs className="tabs" value={value} onChange={handleChange } >
                    <Tab  label="Simple Bookmarking" {...a11yProps(0)}/>   
                    <Tab  label="Speedy Searching" />
                    <Tab  label="Easy Sharing"  />
                </Tabs>
                <TabPanel value={value} index={0}>
                <SimpleBookmark>
                            <SBLeft>
                                <SBLImage src={tab1}/>
                            </SBLeft>
                            <SBRight>
                            <LeftSection>
                    <LFH1 className="ptext">Bookmark in one click</LFH1>
                    <LFP className="ptext" >Organize your bookmarks however you like. Our simple drag-and-drop
                        interface gives you complete control over how you manage your favourite 
                        sites
                    </LFP>
                    <LFButtons>
                        <Button  variant="contained" color="primary">More info</Button>
                        
                    </LFButtons>
                </LeftSection>
                            </SBRight>
                        </SimpleBookmark>
                </TabPanel>

                {/* TabPanel2 */}
                <TabPanel value={value} index={1}>
                <SimpleBookmark>
                            <SBLeft>
                                <SBLImage src={tab2}/>
                            </SBLeft>
                            <SBRight>
                            <LeftSection>
                    <LFH1 className="ptext">Intelligent search</LFH1>
                    <LFP className="ptext" >Our powerful search feature will help 
                                            you find saved sites in no time at all.
                                            No need to trawl through all of your 
                                            bookmarks.
                    </LFP>
                    <LFButtons>
                        <Button  variant="contained" color="primary">More info</Button>
                        
                    </LFButtons>
                </LeftSection>
                            </SBRight>
                        </SimpleBookmark>
                </TabPanel>

                {/* TabPanel3 */}
                <TabPanel value={value} index={2}>
                <SimpleBookmark>
                            <SBLeft>
                                <SBLImage src={tab3}/>
                            </SBLeft>
                            <SBRight>
                            <LeftSection>
                    <LFH1 className="ptext">Share your bookmarks</LFH1>
                    <LFP className="ptext" >Easily share your bookmarks
                                        and collections with others. Create
                                        a sharable link that you can send at
                                        the click of a button.
                    </LFP>
                    <LFButtons>
                        <Button  variant="contained" color="primary">More info</Button>
                        
                    </LFButtons>
                </LeftSection>
                            </SBRight>
                        </SimpleBookmark>
                </TabPanel>
            </FeaturesBody>
            
        </FeaturesSection>
            
        </>
    )
}

export default Features
