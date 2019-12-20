import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/documents';

import { ReactComponent as UploadIcon } from '../../assets/documents/upload.svg';

const StyledModal = styled(Modal)`
    width: 450px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Drop = styled.div`
    height: 200px;
    position: relative;
    background-color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    &:hover {
        border-color: #1976d2;
    }

    & > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        outline: none;
    }

    & svg {
        width: 50px;
        height: 50px;
        margin: 10px 0;
    }

    &:hover svg {
        fill: #1976d2;
    }

    & span {
        font-size: 16px;
    }

    &:hover span {
        color: #1976d2;
    }
`;

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    closeUpload: actions.closeUpload,
    startUpload: actions.startUpload
}, dispatch);

type Props = ReturnType<typeof mapDispatchToProps>;

const Upload = (props: Props) => {
    return (
        <StyledModal
            isOpen={true}
            onRequestClose={props.closeUpload}
            style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
        >
            <Drop>
                <Dropzone onDrop={props.startUpload}>
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />

                            <UploadIcon />

                            <span>Drag and drop or select files</span>
                        </div>
                    )}
                </Dropzone>
            </Drop>
        </StyledModal>
    );
};

export default connect(null, mapDispatchToProps)(Upload);