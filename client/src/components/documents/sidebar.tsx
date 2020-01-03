import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/documents';

const Wrapper = styled.div`
    width: 200px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.08);
`;

const Name = styled(Link)`
    font-size: 24px;
    font-weight: 500;
`;

const List = styled.ul`
    margin-top: 40px;
`;

const Item = styled.li`
    cursor: pointer;
`;

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    openUpload: actions.openUpload,
}, dispatch);

type Props = ReturnType<typeof mapDispatchToProps>;

const Sidebar = (props: Props) => {
    return (
        <Wrapper>
            <Name to='/'>sopview</Name>

            <List>
                <Item onClick={props.openUpload}>
                    <span>Upload</span>
                </Item>
            </List>
        </Wrapper>
    );
};

export default connect(null, mapDispatchToProps)(Sidebar);