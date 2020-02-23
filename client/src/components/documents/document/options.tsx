import React, { useState } from 'react';
import styled from 'styled-components';
import Popover from 'react-tiny-popover';

const Wrapper = styled.div`
    width: 28px;
    height: 28px;
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
            content={<ul></ul>}
        >
            <Wrapper></Wrapper>
        </Popover>
    );
};

export default Options;
