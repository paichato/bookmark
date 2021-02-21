import styled from "styled-components";



export const FAQSection=styled.section`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
height:900px;


.accordion{
    /* width:40vw; */
    
    border-top:1px solid rgba(0,0,0,0.1);
    border-bottom:1px solid rgba(0,0,0,0.1);
    box-shadow:none;
    background:white;
    color:var(--very-dark-blue);
    
}
.Mui-expanded .exp{
    fill:#ff4569;
}

h4{
    font-weight:400;

    &:hover{
        color:#ff4569;
    }
}
p{
    color:var(--grayish-blue);
}

`

export const FAQContent=styled.div`
width:30vw;
margin-top:50px;
`