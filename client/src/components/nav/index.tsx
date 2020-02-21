import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import overviewIcon from '../../assets/overview.png';
import documentsIcon from '../../assets/documents.png';

const Wrapper = styled.div`
    width: 250px;
    height: 100vh;
    position: absolute;
    padding: 20px;
    background-color: #f5f5f5;
    border-right: 1px solid #dcdcdc;

    & li {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        /*background-color: #2660e1;*/
        border-radius: 5px;
    }

    & img {
        width: 25px;
        height: 25px;
        position: absolute;
    }

    & a {
        margin-left: 40px;
        font-size: 16px;
        color: #707070;
    }

    & a.active {
        color: #2860e1;
    }
`;

const Nav = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <img src={overviewIcon} />
                    <Link to='/overview'>Overview</Link>
                </li>
                <li>
                    <img src={documentsIcon} />
                    <Link to='/documents'>Documents</Link>
                </li>
            </ul>
        </Wrapper>
    );
};

export default Nav;
