import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import Types from 'SopviewTypes';

import Sidebar from './sidebar';
import Document from './document';
import Viewer from './viewer';
import Rename from './rename';
import Delete from './delete';
import Upload from './upload';
import Uploader from './uploader';

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

const mapStateToProps = (state: Types.State) => ({
    viewerOpen: state.documents.viewerOpen,
    renameOpen: state.documents.renameOpen,
    deleteOpen: state.documents.deleteOpen,
    uploadOpen: state.documents.uploadOpen,
    uploading: state.documents.uploading
});

type Props = ReturnType<typeof mapStateToProps>;

const Documents = (props: Props) => {
    return (
        <Wrapper>
            <Sidebar />

            <Grid>
                <Document filename={'file1.pdf'} />
                <Document filename={'file2.pdf'} />
                <Document filename={'file3.pdf'} />
                <Document filename={'file4.pdf'} />
            </Grid>

            {props.viewerOpen && <Viewer />}
            {props.renameOpen && <Rename />}
            {props.deleteOpen && <Delete />}
            {props.uploadOpen && <Upload />}
            <Uploader bottom={props.uploading ? 25 : -150} />
        </Wrapper>
    );
};

export default connect(mapStateToProps, null)(Documents);