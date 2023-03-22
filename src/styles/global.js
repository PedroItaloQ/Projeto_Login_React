import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(to right, #0556cf, #5c54dd, #8f4ce5, #be3be7, #eb12e3);
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export default GlobalStyle;