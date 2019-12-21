import React from 'react';
import styled from 'styled-components';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Types from 'SopviewTypes';
import * as actions from '../../actions/documents';

import { ReactComponent as CancelIcon } from '../../assets/documents/cancel.svg';

// https://dribbble.com/shots/6859580-File-Uploader

// TODO show success / error message rather than just sliding back down

const Wrapper = styled.div`
    width: 350px;
    height: 100px;
    position: absolute;
    right: 25px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: bottom 500ms ease-in-out;

    & > span {
        display: block;
        padding-top: 20px;
        margin-left: 20px;
        font-size: 18px;
    }
`;

const Button = styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 16px;
    border-radius: 50%;
    cursor: pointer;
`;

const Pause = styled(Button)`
    right: 58px;
    background-color: rgba(0, 0, 0, 0.08);
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.16);
    }

    & > img {
        width: 12px;
        opacity: 0.54;
    }
`;

const Cancel = styled(Button)`
    right: 20px;
    background-color: rgba(228, 174, 174, 0.3);

    &:hover {
        background-color: rgba(228, 174, 174, 0.6);
    }

    & > svg {
        width: 10px;
        height: 10px;
        fill: #bf3d43;
    }
`;

const Progress = styled.div`
    width: 310px;
    height: 5px;
    position: absolute;
    left: 20px;
    bottom: 20px;
    background-color: rgba(0, 0, 0, 0.08);

    & > div {
        width: 100px;
        height: 5px;
        background-color: #1976d2;
        transition: width 100ms;
    }
`;

const mapStateToProps = (state: Types.State) => ({
    uploadPercent: state.documents.uploadPercent
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    cancelUpload: actions.cancelUpload
}, dispatch);

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {
    bottom: number;
};

const Uploader = (props: Props) => {
    const progress = (310 * props.uploadPercent) + 'px';

    return (
        <Wrapper style={{ bottom: props.bottom }}>
            <span>Uploading Files</span>

            <Pause>
                <img src={require('../../assets/documents/pause.svg')} alt='' />
            </Pause>

            <Cancel onClick={props.cancelUpload}>
                <CancelIcon />
            </Cancel>

            <Progress>
                <div style={{ width: progress }} />
            </Progress>
        </Wrapper>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);