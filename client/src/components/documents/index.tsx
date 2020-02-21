import React from 'react';
import styled from 'styled-components';

import MenuBar from './menuBar';
import Document from './document';

const Wrapper = styled.div`
    width: calc(100% - 300px);
    padding: 50px;
    margin-left: 300px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    column-gap: 25px;
    row-gap: 25px;
`;

const Documents = () => {
    return (
        <Wrapper>
            <h2>Documents</h2>

            <MenuBar />

            <Grid>
                <Document />
                <Document />
                <Document />
            </Grid>
        </Wrapper>
    );
};

export default Documents;
