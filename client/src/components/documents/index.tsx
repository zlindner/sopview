import React from 'react';
import styled from 'styled-components';

import Document from './document';
import Viewer from './viewer';
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
                <Document filename={'file1.pdf'} />
                <Document filename={'file2.pdf'} />
                <Document filename={'file3.pdf'} />
                <Document filename={'file4.pdf'} />
            </Grid>

            <Viewer />
            <Rename />
            <Delete />
        </Wrapper>
    );
}

export default Documents;