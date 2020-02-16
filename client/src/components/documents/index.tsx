import React from 'react';
import styled from 'styled-components';

import Document from './document';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
    grid-gap: 25px;
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
