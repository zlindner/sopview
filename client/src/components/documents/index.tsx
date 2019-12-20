import React from 'react';
import styled from 'styled-components';

import Sidebar from './sidebar';
import Document from './document';
import Viewer from './viewer';
import Rename from './rename';
import Delete from './delete';
import Upload from './upload';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 225px);
    grid-gap: 25px;
    margin-left: 200px;
    box-sizing: border-box;
    padding: 25px;

    @media (max-width: 1199px) {
        grid-template-columns: repeat(3, 225px);
    }

    @media (max-width: 974px) {
        grid-template-columns: repeat(2, 225px);
    }

    @media (max-width: 749px) {
        grid-template-columns: repeat(1, 225px);
    }
`;

const Documents = () => {
    return (
        <Wrapper>
            <Sidebar />

            <Grid>
                <Document filename={'file1.pdf'} />
                <Document filename={'file2.pdf'} />
                <Document filename={'file3.pdf'} />
                <Document filename={'file4.pdf'} />
            </Grid>

            <Viewer />
            <Rename />
            <Delete />
            <Upload />
        </Wrapper>
    );
};

export default Documents;