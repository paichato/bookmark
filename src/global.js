

import {createGlobalStyle} from 'styled-components';



export default createGlobalStyle`


*{
    box-sizing:border-box;
    padding:0;
    margin:0;
    font-family: 'Rubik', sans-serif;
    border:0;
    font-smooth:auto;
    -webkit-font-smoothing:antialiased;
    
}

body{
    /* padding: 5vh 10vw 0px 10vw; */
}

html{
    max-width:100vw;
    max-height:100vh;
    background:white;
}

body{
    font-size:18px;
}

#root{
    --soft-blue:hsl(231, 69%, 60%);
    --soft-red:hsl(0, 94%, 66%);
    --grayish-blue:hsl(229, 8%, 60%);
    --very-dark-blue:hsl(229, 31%, 21%);
    --red:#ff4569;
}


`