import React, { useState } from 'react';
import styled from 'styled-components';
import Popover from 'react-tiny-popover';

import Icon from '../../../assets/documents/options.svg';

const Wrapper = styled.div`
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8px;
    right: 4px;
    border-radius: 50%;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }

    & svg {
        width: 18px;
        height: 18px;
        fill: #707070;
    }
`;

const Modal = styled.ul`
    width: 150px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    & li {
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        cursor: pointer;
    }

    & li:hover {
        background-color: rgba(0, 0, 0, 0.08);
    }
`;

const Options = () => {
    const [open, setOpen] = useState(false);

    return (
        <Popover
            isOpen={open}
            position='bottom'
            align='start'
            onClickOutside={() => setOpen(false)}
            transitionDuration={0}
            content={
                <Modal>
                    <li>
                        <span>Rename</span>
                    </li>
                    <li>
                        <span>Delete</span>
                    </li>
                </Modal>
            }>
            <Wrapper
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.stopPropagation();
                    setOpen(!open);
                }}>
                <Icon />
            </Wrapper>
        </Popover>
    );
};

export default Options;
