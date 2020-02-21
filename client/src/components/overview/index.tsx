import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: calc(100% - 300px);
    padding: 50px;
    margin-left: 300px;
`;

const Overview = () => {
    return (
        <Wrapper>
            <h2>Overview</h2>
        </Wrapper>
    );
};

export default Overview;
