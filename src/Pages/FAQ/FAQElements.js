import styled from "styled-components";



export const FAQSection=styled.section`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
height:900px;


padding: 5vh 10vw 0px 10vw;

.accordion{
   
    border-top:1px solid rgba(0,0,0,0.01);
    /* border-bottom:1px solid rgba(0,0,0,0.1); */
    box-shadow:none;
    background:white;
    color:var(--very-dark-blue);
    
    
}

#last-acc{
    border-bottom:1px solid rgba(0,0,0,0.1);
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
.accordion p{
    color:var(--grayish-blue);
    text-align:justify;
}


Button{
    margin-top:50px;
    margin-bottom:10px;
    /* overflow-y:hidden; */
}
`

export const FAQContent=styled.div`
width:40vw;
margin-top:50px;
overflow-y:auto;
`