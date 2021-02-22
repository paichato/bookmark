import styled from "styled-components"




export const FeaturesSection=styled.section`
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
height:900px;

padding: 5vh 10vw 0px 10vw;
`
export const FeaturesHeader=styled.div`
width:40vw;

h1{
    color:var(--very-dark-blue);

}

p{
    margin-top:30px;
    color:var(--grayish-blue);
    line-height:25px;
    /* letter-spacing:4px; */
}

`

export const FeaturesBody=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

.tabs{
    margin-top:50px;
}
`
export const SimpleBookmark=styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
width:100vw;
margin-top:50px;

.ptext{
    text-align:left;
}
`

export const SBLeft=styled.div`

`
export const SBRight=styled.div`

`

export const SBLImage=styled.img`


`