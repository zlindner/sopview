import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        font-family: Inter;
        overflow: hidden;
        user-select: none;
        box-sizing: border-box;
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
        outline: none;
    }

    a:visited {
        color: #000000;
    }

    @font-face {
        font-family: Inter;
        src: url(assets/font/Inter-Light.oft);
        font-weight: 300;
    }

    @font-face {
        font-family: Inter;
        src: url(assets/font/Inter-Regular.otf);
        font-weight: 400;
    }

    @font-face {
        font-family: Inter;
        src: url(assets/font/Inter-Regular.otf);
        font-weight: 500;
    }

    @font-face {
        font-family: Inter;
        src: url(assets/font/Inter-Bold.otf);
        font-weight: 700;
    }
`;
