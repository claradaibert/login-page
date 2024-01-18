import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        max-width: 100vw;
    }

    button {
        cursor: pointer;
    }

`;

export { GlobalStyle };
