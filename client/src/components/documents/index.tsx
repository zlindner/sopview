import React, { Component } from 'react';
import styled from 'styled-components';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Types from 'SopviewTypes';
import * as actions from '../../actions/documents';

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
    sops: state.documents.sops,
    viewerOpen: state.documents.viewerOpen,
    renameOpen: state.documents.renameOpen,
    deleteOpen: state.documents.deleteOpen,
    uploadOpen: state.documents.uploadOpen,
    uploaderOpen: state.documents.uploaderOpen
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadDocuments: actions.loadDocuments
}, dispatch);

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Documents extends Component<Props, {}> {
    componentDidMount() {
        this.props.loadDocuments();
    }

    render() {
        return (
            <Wrapper>
                <Sidebar />

                <Grid>
                    {this.props.sops.map(sop => (
                        <Document sop={sop} />
                    ))}
                </Grid>
    
                {this.props.viewerOpen && <Viewer />}
                {this.props.renameOpen && <Rename />}
                {this.props.deleteOpen && <Delete />}
                {this.props.uploadOpen && <Upload />}
                <Uploader bottom={this.props.uploaderOpen ? 25 : -150} />
            </Wrapper>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Documents);