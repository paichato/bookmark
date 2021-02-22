import { Button, FormControl, TextField } from '@material-ui/core'
import { NavItem, NavMenu } from '@mui-treasury/components/menu/navigation'
import React from 'react'
import { NavLinks, NavLogo } from '../Hero/HeroElemnts'
import { ContactUs, FooterContainer } from './FooterElements'
import logo from '../../assets/logo-bookmark.svg'
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain'
import fb from '../../assets/icon-facebook.svg';
import tw from '../../assets/icon-twitter.svg';


function Footer() {
    return (
        <>
            <ContactUs id="contactus">
                <p>35,000+ ALREADY JOINED</p>
                <h2>Saty up-to-date with what we're doing</h2>
                <form>
                    <FormControl>
                        <TextField margin="none" type="email" className="txtF" defaultValue="email@example.com" variant="outlined">
                            
                        </TextField>
                    </FormControl>
                    <Button variant="contained" >Contact Us</Button>
                </form>
            </ContactUs>
            <FooterContainer>
                <footer>
                    <div className="ft">
                <NavLogo className="navLg" src={logo}/>
                    
                        <NavMenu useStyles={usePlainNavigationMenuStyles}>
                
                <NavItem className="navs" href="#features" rel="noreffer noopener">FEATURES</NavItem>
                <NavItem className="navs" href="#extension" rel="noreffer noopener" >PRICING</NavItem>
                <NavItem className="navs" href="#contactus" rel="noreffer noopener" >CONTACT</NavItem>
                </NavMenu>
               
                </div>
                <div className="social">
                    <img src={fb} alt="facebook"/>
                    <img src={tw} alt="twitter"/>
                </div>

                </footer>
            </FooterContainer>

        </>
    )
}

export default Footer
