import React from 'react';
import styled from 'styled-components';

import Document from './document';

const Wrapper = styled.div``;

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 225px);
    column-gap: 25px;
    row-gap: 25px;
    padding: 25px;
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
