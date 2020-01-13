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

const Text = styled.span`
    display: block;
    padding-top: 20px;
    margin-left: 20px;
    font-size: 18px;
`;

const Input = styled.input`
    width: 310px;
    position: absolute;
    top: 60px;
    margin: 0 20px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    transition: all 250ms ease-in-out;

    &:hover {
        border-color: rgba(0, 0, 0, 0.87);
    }

    &:focus {
        border-color: #1976d2;
    }
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
    sop: state.documents.currentSOP
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    closeRename: actions.closeRename,
    confirmRename: actions.confirmRename
}, dispatch);

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = {
    newName: string;
};

class Rename extends Component<Props, State> {
    state: Readonly<State> = {
        newName: ''
    };

    onClose = () => {
        this.setState({ newName: '' });
        this.props.closeRename();
    };

    onConfirm = () => {
        this.setState({ newName: '' });
        this.props.confirmRename(this.props.sop, this.state.newName);
    };

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ newName: e.target.value });
    };

    render() {
        let inputValue = this.state.newName === '' ? this.props.sop.filename : this.state.newName;

        return (
            <StyledModal
                isOpen={true}
                onRequestClose={this.onClose}
                style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
            >
                <Text>Rename</Text>

                <Input type='text' onChange={this.onChange} value={inputValue} />

                <Confirm onClick={this.onConfirm}>CONFIRM</Confirm>
                <Cancel onClick={this.onClose}>CANCEL</Cancel>
            </StyledModal>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rename);