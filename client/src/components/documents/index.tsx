import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Types from 'SopviewTypes';
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

const mapStateToProps = (state: Types.State) => ({
    documents: state.documents.documents
});

type Props = ReturnType<typeof mapStateToProps>;

const Documents = (props: Props) => {
    return (
        <Wrapper>
            <h2>Documents</h2>

            <MenuBar />

            <Grid>
                {props.documents.map(doc => (
                    <Document filename={doc.filename} path={doc.path} />
                ))}
            </Grid>
        </Wrapper>
    );
};

export default connect(mapStateToProps, null)(Documents);
