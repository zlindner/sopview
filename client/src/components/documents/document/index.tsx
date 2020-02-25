import React from 'react';
import styled from 'styled-components';
import { Document as PDF, Page } from 'react-pdf/dist/entry.webpack';

import Options from './options';

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
        color: #3f3f3f;
    }
`;

type Props = {
    filename: string;
    path: string;
    bytes: { type: string; data: number[] };
};

const Document = (props: Props) => {
    return (
        <Wrapper>
            <span>{props.filename}</span>

            <Options />

            <PDF
                file={{ data: Buffer.from(JSON.stringify(props.bytes)) }}
                renderMode='svg'
                onLoadError={console.error}
                options={{
                    cMapUrl: 'cmaps/',
                    cMapPacked: true
                }}>
                <Page pageIndex={0} height={250} renderTextLayer={false} renderAnnotationLayer={false} loading='' />
            </PDF>
        </Wrapper>
    );
};

export default Document;
