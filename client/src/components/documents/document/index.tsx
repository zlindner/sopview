import React, { useState } from 'react';
import styled from 'styled-components';
import { Document as PDF, Page } from 'react-pdf/dist/entry.webpack';

import Types from 'Sopview';
import Options from './options';
import Delete from './delete';
import ErrorIcon from '../../../assets/documents/error.svg';

const Wrapper = styled.div`
    width: 200px;
    height: 225px;
    display: flex;
    position: relative;
    padding: 10px;

    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    &:hover {
        background-color: #f0f4fb;
        border: 1px solid #70a4ff;
    }

    & span {
        font-size: 16px;
    }
`;

const Error = styled.div`
    & svg {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 75px;
        left: 50%;
        transform: translateX(-50%);
        fill: #3f3f3f;
    }

    & span {
        font-size: 14px;
        text-align: center;
        position: absolute;
        top: 130px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

type Props = {
    data: Types.Document;
};

const Document = (props: Props) => {
    const [error, setError] = useState(false);
    // analyzed, setAnalyzed => use warning icon
    // create small status component that shows error / needs analysis / etc depending on state
    const [renaming, setRenaming] = useState(false);
    const [deleting, setDeleting] = useState(false);

    return (
        <Wrapper>
            <span>{props.data.filename}</span>

            <Options setRenaming={setRenaming} setDeleting={setDeleting} />
            <Delete open={deleting} setDeleting={setDeleting} document={props.data} />

            {!error && (
                <PDF
                    file={{ data: Buffer.from(JSON.stringify(props.data.bytes)) }}
                    renderMode='svg'
                    onLoadError={() => setError(true)}
                    options={{
                        cMapUrl: 'cmaps/',
                        cMapPacked: true
                    }}>
                    <Page pageIndex={0} height={250} renderTextLayer={false} renderAnnotationLayer={false} loading='' />
                </PDF>
            )}

            {error && (
                <Error>
                    <ErrorIcon />
                    <span>Error loading PDF</span>
                </Error>
            )}
        </Wrapper>
    );
};

export default Document;
