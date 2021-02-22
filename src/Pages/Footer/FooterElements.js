import styled from "styled-components";



export const ContactUs=styled.div`
background:var(--soft-blue);

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
/* width:100vw; */

p{
    margin-top:50px;
    color:white;
}

h2{
    margin-top:50px;
    color:white;
}

form{
    margin-top:50px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-bottom:100px;

    Button{
    margin-left:20px;
    color:var(--soft-blue);
    height:55px;
    background:white;

        &:hover{
            color:#ff4569;
        }
    }

    .txtF{
        color:white;
        /* padding-right:20px; */
        /* border: 1px solid rgba(300,300,300,0.9); */
        outline:none;
    }

    .MuiTextField-root{
        color:white;
        /* background:white; */
        
    }

    .MuiFormControl-root{
        background:white;
        border:none;
        border-radius:7px;
    }
    .MuiInput-root{
        border:none;
        background:white;
    }
}



`

export const FooterContainer=styled.div`
display:flex;
flex-direction:row;
align-items:center;
background:var(--very-dark-blue);
/* position:fixed;
bottom:0;
left:0; */



footer{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    width:100vw;
    padding:10px;
    font-size:12px;
    
}

.ft{
    display:flex;
    flex-direction:row;
    align-items:center;
}

.social{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    /* fill:white; */
    
}

.social img{
    cursor: pointer;
    padding-right:10px;
    width:30px;
    /* height:30px; */

    &:hover{
        fill:#ff4569;
    }
}

.navLg{
    
    /* background:white; */
    caret-color:white;
    background:invert;
}

.navs{
    color:white;
}


`