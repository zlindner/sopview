import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import OverviewIcon from '../../assets/nav/overview.svg';
import DocumentsIcon from '../../assets/nav/documents.svg';

const Wrapper = styled.div`
    & li {
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 10px;
    }

    & svg {
        width: 20px;
        height: 20px;
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
