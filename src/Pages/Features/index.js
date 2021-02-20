import { Box, Button, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { FeaturesBody, FeaturesHeader, FeaturesSection, SBLeft, SBLImage, SBRight, SimpleBookmark } from './FeaturesElements'
import {twitterTabsStylesHook} from '@mui-treasury/styles/tabs';
import { LeftSection, LFButtons, LFH1, LFP } from '../Hero/HeroElemnts';
import tab1 from '../../assets/illustration-features-tab-1.svg';

function Features() {

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
        <FeaturesSection>
            <FeaturesHeader>
                <h1>Features</h1>
                <p>Our aim is to make it 
                    quick and easy for you to access
                    your favourite websites. Your bookmarks
                    sync between your devices so you
                    can access them on the go.</p>
            </FeaturesHeader>
            <FeaturesBody>
                
                
                <Tabs value={value} onChange={handleChange } >
                    <Tab  label="Simple Bookmarking" {...a11yProps(0)}/>   
                    <Tab  label="Speedy Searching" />
                    <Tab  label="Easy Sharing" href="#" />
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
            </FeaturesBody>
            
        </FeaturesSection>
            
        </>
    )
}

export default Features
