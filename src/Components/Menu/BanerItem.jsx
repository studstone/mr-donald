import React from 'react';
import styled from 'styled-components';
import ImageBaner from '../../image/banner.png';

const Baner = styled.div`
    width: 100%;
    height: 210px;
    background-image: url(${ImageBaner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const BanerItem = () => {
    return (
        <Baner />
    );
}

export default BanerItem;
