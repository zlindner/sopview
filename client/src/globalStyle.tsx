import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #eaecf2;
    }

    div {
        box-sizing: border-box;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    a {
        color: #000000;
        text-decoration: none;
    }

    a:visited {
        color: #000000;
    }
`;
