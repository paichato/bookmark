import React from 'react'
import {NavMenu, NavItem} from '@mui-treasury/components/menu/navigation';
import {usePlainNavigationMenuStyles} from '@mui-treasury/styles/navigationMenu/plain';
import { NavBar, NavLinks, NavLogo } from './HeroElemnts';
import logo from '../../assets/logo-bookmark.svg'
import {  Button, makeStyles} from '@material-ui/core';



function Hero() {

    
    return (
        <div>
            
            <NavBar>
                <NavLogo src={logo}/>

                
                <NavLinks>
                    <NavMenu useStyles={usePlainNavigationMenuStyles}>
                        <NavItem className="navs">FEATURES</NavItem>
                        <NavItem className="navs">PRICING</NavItem>
                        <NavItem className="navs">CONTACT</NavItem><NavItem>
                            <Button variant="outlined" color="secondary" style={{color:"red"}} >
                            Login
                            </Button>
                        </NavItem>
                    </NavMenu>
                </NavLinks>
            </NavBar>
        </div>
    )
}

export default Hero
