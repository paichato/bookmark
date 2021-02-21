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
    color:var(--soft-blue);
    height:55px;

        &:hover{
            color:#ff4569;
        }
    }

    .txtF{
        color:white;
        padding-right:20px;
        /* border: 1px solid rgba(300,300,300,0.9); */
        outline:none;
    }

    .MuiTextField-root{
        color:white;
        background:white;
        
    }
    .MuiInput-root{
        border:none;
        background:white;
    }
}



`