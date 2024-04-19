import { createGlobalStyle } from "styled-components";
import { variables } from "./variables";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body {
        padding-top: 88px;
        background-color: ${variables.colors.gray600};
        color: ${variables.colors.gray100};
        transition: 0.3s;

        height: 100vh;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;
