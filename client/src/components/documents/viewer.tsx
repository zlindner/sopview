import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Document as PDF, Page } from 'react-pdf';
import { MoonLoader } from 'react-spinners';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Types from 'SopviewTypes';
import * as actions from '../../actions/documents';

const StyledModal = styled(Modal)`
    width: 80%;
    height: 80%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    overflow-y: scroll;

    & .react-pdf__Document {
        width: 600px;
    }

    & .react-pdf__Page {
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
        margin-bottom: 20px;
    }

    & .react-pdf__Page:last-child {
        margin-bottom: 0;
    }
`;

const Loader = `
    display: block;
    margin: 100px auto;
    vertical-align: middle;
`;

const mapStateToProps = (state: Types.State) => ({
    filename: state.documents.currentDocument
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    closeViewer: actions.closeViewer,
}, dispatch);

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = {
    numPages: number;
};

const sop = require('../../assets/qa001_rev03.pdf'); // TODO load from aws

class Viewer extends Component<Props, State> {
    state: Readonly<State> = {
        numPages: 0
    };

    render() {
        return (
            <StyledModal
                isOpen={true}
                onRequestClose={this.props.closeViewer}
                style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
            >

                <PDF file={sop} onLoadSuccess={({ numPages }: any) => this.setState({ numPages })} loading={<MoonLoader size={30} css={Loader} />}>
                    {Array.from(new Array(this.state.numPages), (_, i) => (
                        <Page key={`page_${i + 1}`} pageNumber={i + 1} width={600} loading='' />
                    ))}
                </PDF>
            </StyledModal>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);