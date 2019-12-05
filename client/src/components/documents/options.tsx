import React, { Component } from 'react';
import styled from 'styled-components';
import Popover from 'react-tiny-popover';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/documents';

const Dots = styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8px;
    right: -8px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    & > img {
        width: 18px;
        opacity: 0.54;
    }

    & .menu {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    }
`;

const List = styled.ul`
    width: 150px;
    box-sizing: border-box;
    background-color: #ffffff;
`;

const Item = styled.li`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    & > img {
        width: 16px;
        opacity: 0.54;
        margin-right: 20px;
    }
`;

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    openRename: actions.openRename,
    openDelete: actions.openDelete
}, dispatch);

type Props = ReturnType<typeof mapDispatchToProps> & {
    filename: string;
};

type State = {
    open: boolean;
};

class Options extends Component<Props, State> {
    state: Readonly<State> = {
        open: false
    }

    onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        this.setState({ open: !this.state.open });
    }

    onRenameClicked = (e: React.MouseEvent<HTMLLIElement>) => {
        e.stopPropagation();
        this.setState({ open: false });
        this.props.openRename(this.props.filename);
    }

    onDeleteClicked = (e: React.MouseEvent<HTMLLIElement>) => {
        e.stopPropagation();
        this.setState({ open: false });
        this.props.openDelete(this.props.filename);
    }

    render() {
        return (
            <Popover
                isOpen={this.state.open}
                position='bottom'
                align='start'
                onClickOutside={() => this.setState({ open: false })}
                containerStyle={{ boxShadow: '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)' }}
                transitionDuration={0}
                content={(
                    <List>
                        <Item onClick={this.onRenameClicked}>
                            <img src={require('../../assets/documents/rename.svg')} alt='' />
                            <span>Rename</span>
                        </Item>

                        <Item onClick={this.onDeleteClicked}>
                            <img src={require('../../assets/documents/delete.svg')} alt='' />
                            <span>Delete</span>
                        </Item>
                    </List>
                )}>

                <Dots onClick={this.onClick}>
                    <img src={require('../../assets/documents/options.svg')} alt='' />
                </Dots>
            </Popover>
        );
    }
}

export default connect(null, mapDispatchToProps)(Options);