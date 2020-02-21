import React from 'react';
import styled from 'styled-components';

import SearchIcon from '../../assets/documents/search.svg';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 0;
    margin-top: 20px;
    margin-bottom: 40px;
    border-bottom: 1px solid #dcdcdc;
`;

const Search = styled.div`
    width: 40%;
    max-width: 300px;
    height: 40px;
    position: relative;

    & input {
        width: 100%;
        height: 40px;
        position: absolute;
        padding-left: 40px;
        font-size: 16px;
        border: 1px solid transparent;
        border-radius: 10px;
        outline: none;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    & input:focus {
        border: 1px solid #70a4ff;
    }

    & svg {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 12px;
        left: 12px;
    }

    ::placeholder {
        color: #a9a9a9;
    }
`;

const MenuBar = () => {
    return (
        <Wrapper>
            <Search>
                <input type='text' placeholder='Search documents' />
                <SearchIcon />
            </Search>
        </Wrapper>
    );
};

export default MenuBar;
