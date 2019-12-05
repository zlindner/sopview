import React from 'react';
import styled from 'styled-components';

import Document from './document';
import Rename from './rename';
import Delete from './delete';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 225px);
    grid-gap: 25px;
    
    box-sizing: border-box;
    padding: 25px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 225px);
    }

    @media (max-width: 774px) {
        grid-template-columns: repeat(2, 225px);
    }
`;

const Documents = () => {
    return (
        <Wrapper>
            <Grid>
                <Document />
                <Document />
                <Document />
                <Document />
            </Grid>

            <Rename />
            <Delete />
        </Wrapper>
    );
}

export default Documents;