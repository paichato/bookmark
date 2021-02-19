import styled from "styled-components";
import logo from '../../assets/logo-bookmark.svg'
import {red} from '@material-ui/core/colors/red'

export const NavBar=styled.nav`

display:flex;
flex-direction:row;
justify-content:space-between;

Button{
    color:red;
    fill:red;
    
}

.navs{
    &:hover{
        color:#ff4569;
    }
}

`
export const NavLogo=styled.img`

height:50%;
src: logo;

`
export const NavLinks=styled.div`

`
