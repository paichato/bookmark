import React from 'react'
import {NavMenu, NavItem} from '@mui-treasury/components/menu/navigation';
import {usePlainNavigationMenuStyles} from '@mui-treasury/styles/navigationMenu/plain';
import { NavBar, NavLinks, NavLogo, HeroSection, LeftSection, LFH1, LFP, LFButtons, RightSection, RImage } from './HeroElemnts';
import logo from '../../assets/logo-bookmark.svg'
import rimage from '../../assets/illustration-hero.svg'
import {  Button, makeStyles} from '@material-ui/core';



function Hero() {

    
    return (
        <div style={{height:"900px"}}>
            
            <NavBar>
                <NavLogo src={logo}/>

                
                <NavLinks>
                    <NavMenu useStyles={usePlainNavigationMenuStyles}>
                        <NavItem className="navs" href="#features" rel="noreffer noopener">FEATURES</NavItem>
                        <NavItem className="navs" href="#extension" rel="noreffer noopener" >PRICING</NavItem>
                        <NavItem className="navs" href="#faq" rel="noreffer noopener" >CONTACT</NavItem>
                        <NavItem className="navs-b">
                            <Button variant="outlined" color="secondary" style={{color:"red"}} >
                            Login
                            </Button>
                        </NavItem>
                    </NavMenu>
                </NavLinks>
            </NavBar>

            <HeroSection>
                <LeftSection>
                    <LFH1>A Simple Bookmark Manager</LFH1>
                    <LFP>A clean and simple interface to
                         organize your favorite websites.
                          Open a new Browser tab and see
                           your sites load instantly. Try
                            it for free.</LFP>
                    <LFButtons>
                        <Button  variant="outlined" color="primary">Get it on Chrome</Button>
                        <Button className="btn-rg" variant="outlined" color="secondary">Get it on Firefox</Button>
                    </LFButtons>
                </LeftSection>
                <RightSection>
                    <RImage src={rimage}/>
                </RightSection>
            </HeroSection>
        </div>
    )
}

export default Hero
