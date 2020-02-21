import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import OverviewIcon from '../../assets/overview.svg';
import DocumentsIcon from '../../assets/documents.svg';

const Wrapper = styled.div`
    width: 250px;
    height: 100vh;
    position: absolute;
    padding: 20px;
    background-color: #f5f5f5;
    border-right: 1px solid #dcdcdc;

    & li {
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 10px;
    }

    & img {
        width: 25px;
        height: 25px;
        position: absolute;
        z-index: 1;
    }

    & svg {
        width: 24px;
        height: 24px;
        position: absolute;
        left: 10px;
        fill: #707070;
        z-index: 1;
    }

    & a.active + svg {
        fill: #ffffff;
    }

    & a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 50px;
        font-size: 16px;
        color: #707070;
        border-radius: 5px;
        box-sizing: border-box;
    }

    & a.active {
        color: #ffffff;
        background-color: #2860e1;
    }
`;

const Nav = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <NavLink to='/overview'>Overview</NavLink>
                    <OverviewIcon />
                </li>
                <li>
                    <NavLink to='/documents'>Documents</NavLink>
                    <DocumentsIcon />
                </li>
            </ul>
        </Wrapper>
    );
};

export default Nav;
