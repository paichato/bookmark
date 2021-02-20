import styled from "styled-components";



export const DExtension=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`

export const Cards=styled.div`
display:flex;
flex-direction:row;


h1{
    color:var(--very-dark-blue);
}
p{
    color:var(--grayish-blue);
}

.btn{
    margin-left:20px;
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

export const CardImage=styled.img`


`
export const Dots=styled.img`


`