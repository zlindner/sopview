import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`;

const Grid = styled.div`
    display: grid;
`;

const MyDocuments = () => {
    return (
        <Wrapper>
            <Grid></Grid>
        </Wrapper>
    );
};

export default MyDocuments;
