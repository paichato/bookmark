import React from 'react'
import {NavMenu, NavItem} from '@mui-treasury/components/menu/navigation'
import {usePlain} from '@mui-treasury/components'

function Hero() {
    return (
        <div>
            <h1>Hello World</h1>
            <NavBar>
                <NavLogo>

                </NavLogo>
                <NavLinks>
                    <NavMenu></NavMenu>
                </NavLinks>
            </NavBar>
        </div>
    )
}

export default Hero
