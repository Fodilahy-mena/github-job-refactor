import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        margin: 0;
    }
    body {
    max-width: 90%;
    min-width: 90%;
    margin: auto;
    background: #f1f1f1;
    margin-bottom: 50px;
    font-family: Poppins;
    font-style: normal;
    }

    body > h1 {
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        /* identical to box height */
        color: #282538;
    } 
    body > h1 > span {
        font-weight: normal;
        /* font-size: 24px; */
    }

    main {
    display: flex;
    flex-direction: row;
    gap: 32px;
    }

`;

export default GlobalStyles;