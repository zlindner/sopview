import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 200px;
    height: 100vh;
    display: inline-block;
`;

const Nav = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/documents'>Documents</Link>
                </li>
            </ul>
        </Wrapper>
    );
};

export default Nav;
