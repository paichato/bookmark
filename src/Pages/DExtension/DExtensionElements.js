import styled from "styled-components";



export const DExtension=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:900px;

padding: 5vh 10vw 0px 10vw;
`

export const Cards=styled.div`
margin-top:50px;
/* display:flex;
flex-direction:row;
justify-content:space-around;
flex-flow: row wrap;
align-items:baseline; */
/* flex-grow:2; */

display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:30px;

width:80vw;

#card2{
     margin-top:40px;
     
     
}
#card3{
     margin-top:80px;
     
     
}

.card{
    height:385px;
    gap:5vh;
    border-radius:12px;
    box-shadow: 0px 18px 18px rgba(0,0,150,0.1);
}

.cardz{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   
}

h2{
    color:var(--very-dark-blue);
    padding-top:30px;
}
p{
    color:var(--grayish-blue);
    padding-top:20px;
}

.btn{
    padding-top:10px;
    background-color:var(--soft-blue);
    color:white;
    border-color:var(--very-dark-blue);

    &:hover{
        color:var(--soft-blue);
        background-color:white;
        border:2px solid var(--soft-blue);
    }
}



`

export const CardsContainer=styled.div`
display:flex;
flex-direction:column;
/* justify-conten */

`

export const CardImage=styled.img`
padding-top:30px;

`
export const Dots=styled.img`
padding:30px 0 10px 0;
margin-bottom:10px;

`