import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    width: 300px;
    height: 175px;
    padding: 10px;

    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    &:hover {
        background-color: #f0f4fb;
        border: 1px solid #70a4ff;
    }

    & span {
        font-size: 18px;
        color: #3f3f3f;
    }
`;

const Document = () => {
    return (
        <Wrapper>
            <span>Document</span>
        </Wrapper>
    );
};

export default Document;
