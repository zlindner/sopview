import React from 'react';
import styled from 'styled-components';

import SearchIcon from '../../assets/documents/search.svg';

const { dialog } = require('electron').remote;

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
        box-sizing: border-box;
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

const Add = styled.button`
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    background-color: #2860e1;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const MenuBar = () => {
    return (
        <Wrapper>
            <Search>
                <input type='text' placeholder='Search documents' />
                <SearchIcon />
            </Search>

            <Add onClick={onClickAdd}>Add documents</Add>
        </Wrapper>
    );
};

const onClickAdd = () => {
    dialog
        .showOpenDialog({
            properties: ['openFile', 'multiSelections']
        })
        .then((result: any) => {
            console.log(result);

            result.filePaths.forEach((path: string) => {
                console.log(path);
            });
        })
        .catch((err: any) => {
            console.error(err);
        });
};

export default MenuBar;
