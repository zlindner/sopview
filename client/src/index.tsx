import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createGlobalStyle } from 'styled-components';
import ReactModal from 'react-modal';

import store, { history } from './store';
import routes from './routes';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'San Francisco';
        font-weight: 400;
        src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff');
    }

    @font-face {
        font-family: 'San Francisco';
        font-weight: 500;
        src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff');
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'San Francisco';
    }

    span {
        user-select: none;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    img {
        user-select: none;
    }

    button {
        width: 100px;
        height: 40px;
        padding: 6px 16px;
        box-sizing: border-box;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.02857em;
        color: rgba(0, 0, 0, 0.87);
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 4px;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        &:hover {
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        }
    }
`;

ReactModal.setAppElement('body');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>

        <GlobalStyle />
    </Provider>,
    document.getElementById('root')
);
