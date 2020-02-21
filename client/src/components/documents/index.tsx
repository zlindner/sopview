import React from 'react';
import styled from 'styled-components';

import Document from './document';

const Wrapper = styled.div``;

const Grid = styled.div`
    width: calc(100% - 300px);
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    column-gap: 25px;
    row-gap: 25px;
    padding: 25px;
    margin-left: 300px;
`;

const Documents = () => {
    return (
        <Wrapper>
            <Grid>
                <Document />
                <Document />
                <Document />
            </Grid>
        </Wrapper>
    );
};

export default Documents;
