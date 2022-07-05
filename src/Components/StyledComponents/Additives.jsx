import styled from 'styled-components';
import CheckIcon from '../../image/check.svg';

export const Title = styled.h3`
    width: 100%;
    font: normal 400 24px/42px Pacifico, cursive;
    text-align: left;
`;
export const AdditivesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;
export const AdditivesLable = styled.label`
    padding-left: 66px;
    font: normal 400 20px/23px Roboto, sans-serif;
    width: 50%;
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;
    &:nth-last-child(2) {
        margin-bottom: 0;
    }
    &:last-child {
        margin-bottom: 0;
    }
`;
export const AdditivesCheckBox = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;

    :hover + span {
        box-shadow: '0 0 5px 2px #44ff00';
        transition: box-shadow 0.3s ease-in-out;
    }

    :checked + span {
        position: relative;
        background-color: #44ff00;
        background-image: ${props => (props.checkbox ? `url(${CheckIcon})` : 'none')};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: background-color 0.3s ease-in-out;
        ::before {
            content: ${props => (!props.checkbox ? `''` : 'none')};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 10px;
            height: 10px;
            background-color: white;
            border-radius: 50%;
        }
    }
`;

export const CustomCheckBox = styled.span`
    width: 24px;
    height: 24px;
    border: 1px solid #299B01;
    border-radius: 6px;
    margin-right: 10px;
    background-color: #f0f0f0;
    background-image: none;
`;
