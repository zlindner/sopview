import React from 'react';
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
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
    filename: state.documents.currentDocument
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    closeDelete: actions.closeDelete,
    confirmDelete: actions.confirmDelete
}, dispatch);

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const Delete = (props: Props) => {
    return (
        <StyledModal
            isOpen={true}
            onRequestClose={props.closeDelete}
            style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
        >
            <Text>Delete {props.filename}?</Text>

            <Cancel onClick={props.closeDelete}>CANCEL</Cancel>
            <Confirm onClick={() => props.confirmDelete(props.filename)}>CONFIRM</Confirm>
        </StyledModal>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Delete);