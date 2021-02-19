import styled from "styled-components";
import logo from '../../assets/logo-bookmark.svg'
import {red} from '@material-ui/core/colors/red'

export const NavBar=styled.nav`

display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

Button{
    color:red;
    fill:red;
    width:100px;
    
}

.navs{
    padding-left: 30px;

    &:hover{
        color:#ff4569;
    }
}
.navs-b{
    margin-right:100px;
}

`
export const NavLogo=styled.img`

height:50%;
src: logo;

`
export const NavLinks=styled.div`

padding-left: 30px;

`


//Hero

export const HeroSection=styled.div`

display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

margin-top:15vh;
/* position:grid;
object-position:center; */

`
export const LeftSection=styled.div`

flex-direction:column;
width:30vw;
`

export const LFH1=styled.h1`
color: var(--very-dark-blue);

/* font-size:50px; */
`

export const LFP=styled.p`
color: var(--grayish-blue);
padding-top:20px;

`
export const LFButtons=styled.div`
display:flex;
flex-direction:row;
padding-top:20px;


.btn-rg{
    margin-left:20px;
    color:var(--very-dark-blue);
    border-color:var(--very-dark-blue);

    &:hover{
        color:var(--very-dark-blue);
        border:1px solid var(--very-dark-blue);
    }
}
`
export const RightSection=styled.div`

`

export const RImage=styled.img`

`
