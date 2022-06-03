import React from 'react';
import styled from 'styled-components';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    background-color: white;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
`

const Order = () => {
    return (
        <OrderStyled />
    );
}

export default Order;
