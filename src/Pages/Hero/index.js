import React from 'react'
import {NavMenu, NavItem} from '@mui-treasury/components/menu/navigation';
import {usePlainNavigationMenuStyles} from '@mui-treasury/styles/navigationMenu/plain';

function Hero() {
    return (
        <div>
            <h1>Hello World</h1>
            <NavBar>
                <NavLogo>

                </NavLogo>
                <NavLinks>
                    <NavMenu useStyles={usePlainNavigationMenuStyles}>
                        <NavItem>Features</NavItem>
                        <NavItem>Features</NavItem>
                        <NavItem>Features</NavItem>

                    </NavMenu>
                </NavLinks>
            </NavBar>
        </div>
    )
}

export default Hero
