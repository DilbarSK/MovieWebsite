import { createGlobalStyle } from "styled-components";

const Global_style = createGlobalStyle`
    ::-webkite-scrollbar{
        width:1.5rem ;
    }
    // ::-webkit-scrollbar-track{
    //     background-color: black;
    // }
    // ::-webkit-scrollbar-thumb{
    //     background: white;
    //     background-clip : content-box ;
    // }
    *{
        padding: 0 ;
        margin : 0 ;
        box-sizing : border-box ;
    }
    body{
        font-family: sans-serif;
    }
    a{
        color : black ;
        text-decoration:none ;
    }
    a ,
    button ,
    i {
        cursor : pointer ;
 
    }
    
    img{
        width : 100% ;
    }
    .section-heading{
        text-align:center ;
        margin :20px ;
    }

    // media query -------------->>>




`;

export default Global_style;
