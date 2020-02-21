import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Nav from './nav';

const Wrapper = styled.div`
    width: 300px;
    height: 100vh;
    position: absolute;
    padding: 20px;
    background-color: #f5f5f5;
    border-right: 1px solid #dcdcdc;
`;

const Sidebar = () => {
    return (
        <Wrapper>
            <Header />
            <Nav />
        </Wrapper>
    );
};

export default Sidebar;
