import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Types from 'SopviewTypes';
import * as actions from '../../actions/documents';

const StyledModal = styled(Modal)`
    width: 350px;
    height: 180px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const mapStateToProps = (state: Types.State) => ({
    viewerOpen: state.documents.viewerOpen,
    filename: state.documents.currentFile
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    closeViewer: actions.closeViewer,
}, dispatch);

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Viewer extends Component<Props, {}> {
    render() {
        return (
            <StyledModal
                isOpen={this.props.viewerOpen}
                onRequestClose={this.props.closeViewer}
            >
                {this.props.filename}
            </StyledModal>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);