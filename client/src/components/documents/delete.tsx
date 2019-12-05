import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Types from 'SopviewTypes';
import * as actions from '../../actions/documents';

const StyledModal = styled(Modal)`
    width: 250px;
    height: 120px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    background-color: #ffffff;
    border-radius: 5px;
`;

const Text = styled.span`
    display: block;
    padding-top: 20px;
    margin-left: 20px;
    font-size: 18px;
`;

const Confirm = styled.button`
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: #1976d2;
    color: #ffffff;

    &:hover {
        background-color: #1669bb;
    }
`;

const Cancel = styled.button`
    position: absolute;
    bottom: 20px;
    right: 130px;
    background-color: #ffffff;
`;

const mapStateToProps = (state: Types.State) => ({
    deleteOpen: state.documents.deleteOpen,
    filename: state.documents.currentFile
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    closeDelete: actions.closeDelete,
    confirmDelete: actions.confirmDelete
}, dispatch);

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Delete extends Component<Props, {}> {
    render() {
        return (
            <StyledModal
                isOpen={this.props.deleteOpen}
                onRequestClose={this.props.closeDelete}
                style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
            >
                <Text>Delete {this.props.filename}?</Text>

                <Cancel onClick={this.props.closeDelete}>CANCEL</Cancel>
                <Confirm onClick={() => this.props.confirmDelete(this.props.filename)}>CONFIRM</Confirm>
            </StyledModal>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);