import React from 'react';
import styled from 'styled-components';

import CollapseIcon from '../../assets/nav/collapse.svg';

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    position: relative;

    & div {
        width: 50px;
        height: 50px;
        background-color: black;
        position: absolute;
    }

    & span {
        width: 140px;
        position: absolute;
        top: 2px;
        left: 70px;
        color: #3f3f3f;
        font-size: 18px;
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    & svg {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 0;
        fill: #707070;
        cursor: pointer;
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <div />

            <span>Prollenium</span>

            <CollapseIcon />
        </Wrapper>
    );
};

export default Header;
