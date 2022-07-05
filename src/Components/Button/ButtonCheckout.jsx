import styled from 'styled-components';

const ButtonCheckout = styled.button`
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    background-color: #299B01;
    width: 250px;
    padding-top: 20px;
    padding-bottom: 20px;
    border: none;
    color: white;
    border-radius: 8px;
    transition: background-color .5s ease-in-out;
    &:hover {
        background-color: #3ce200;
        transition: background-color .5s ease-in-out;
    }
    &:disabled {
        background-color: #6eb853;
    }
`;

export default ButtonCheckout;
