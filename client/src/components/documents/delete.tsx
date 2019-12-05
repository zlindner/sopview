import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Types from 'SopviewTypes';
import * as actions from '../../actions/documents';

const StyledModal = styled(Modal)`
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    background-color: #ffffff;
`;

const mapStateToProps = (state: Types.State) => ({
    deleteOpen: state.documents.deleteOpen
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    closeDelete: actions.closeDelete
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
                delete
            </StyledModal>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);