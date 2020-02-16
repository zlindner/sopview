import React from 'react';
import styled from 'styled-components';
import { Document as PDF, Page } from 'react-pdf';

const Wrapper = styled.div`
    display: flex;
    width: 225px;
    height: 250px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: box-shadow 100ms ease-in-out;

    &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
`;

const Document = () => {
    return <Wrapper></Wrapper>;
};

export default Document;
