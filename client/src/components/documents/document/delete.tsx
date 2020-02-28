import React from 'react';
import styled from 'styled-components';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import * as actions from '../../../actions/documents';
import Types from 'Sopview';

const StyledModal = styled(Modal)`
    width: 240px;
    height: 120px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    outline: none;
    background-color: #ffffff;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    & button {
        position: absolute;
        bottom: 20px;
        right: 130px;
        width: 100px;
        height: 30px;
        margin-left: 40px;
        border-radius: 10px;
        cursor: pointer;
        font-size: 16px;
    }

    & button.confirm {
        right: 20px;
        background-color: #2860e1;
        color: #ffffff;
    }
`;

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            deleteDocument: actions.deleteDocument
        },
        dispatch
    );

type Props = {
    open: boolean;
    setDeleting: Function;
    document: Types.Document;
} & ReturnType<typeof mapDispatchToProps>;

const Delete = (props: Props) => {
    return (
        <StyledModal
            isOpen={props.open}
            onRequestClose={() => props.setDeleting(false)}
            style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}>
            <span>Delete {props.document.filename}?</span>

            <button onClick={() => props.setDeleting(false)}>Cancel</button>
            <button
                onClick={() => {
                    props.deleteDocument(props.document);
                    props.setDeleting(false);
                }}
                className='confirm'>
                Confirm
            </button>
        </StyledModal>
    );
};

export default connect(null, mapDispatchToProps)(Delete);
