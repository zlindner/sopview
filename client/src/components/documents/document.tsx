import React from "react";
import styled from 'styled-components';
import { Document as PDF, Page } from 'react-pdf';
import { MoonLoader } from 'react-spinners';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/documents';

import Options from './options';

const Wrapper = styled.div`
    width: 225px;
    height: 250px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    & .react-pdf__Document {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
    }

    & .react-pdf__Page {
        position: absolute;
        top: 40px;
    }
`;

const Filename = styled.span`
    width: 80%;
    display: inline-block;
    position: absolute;
    top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Loader = `
    display: block;
    margin: 100px auto;
    vertical-align: middle;
`;

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    openViewer: actions.openViewer,
}, dispatch);

type Props = ReturnType<typeof mapDispatchToProps> & {
    sop: SOP
}

const Document = (props: Props) => {
    return (
        <Wrapper onClick={() => props.openViewer(props.sop)}>
            <PDF file={props.sop.url} renderMode='svg' onLoadError={console.error} loading={<MoonLoader size={30} css={Loader} />}>
                <Filename>{props.sop.filename}</Filename>
                <Options sop={props.sop} />

                <Page pageIndex={0} height={250} renderTextLayer={false} renderAnnotationLayer={false} loading='' />
            </PDF>
        </Wrapper >
    );
}

export default connect(null, mapDispatchToProps)(Document);