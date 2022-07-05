import React from 'react';
import styled from 'styled-components';
import { AdditivesCheckBox, AdditivesLable, AdditivesWrapper, Title } from '../StyledComponents/Additives';

const CustomRadio = styled.span`
    
`;

const Choices = ({ openItem, choice, changeChoices }) => (
    <>
        <Title>Выбирите:</Title>
        <AdditivesWrapper>
            {openItem.choices.map((item, i) => (
                <AdditivesLable key={i}>
                    <AdditivesCheckBox
                        type='radio'
                        name='choices'
                        value={item}
                        checked={choice === item}
                        onChange={changeChoices}
                    />
                    <CustomRadio />
                    {item}
                </AdditivesLable>
            ))}
        </AdditivesWrapper>
    </>
);

export default Choices;
