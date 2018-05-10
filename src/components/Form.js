import React from "react";
import styled from "styled-components";

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <Container>
            <Input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <Button onCreate={onCreate}>추가</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;

const Input = styled.input`
    flex: 1;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid palevioletred;
`;

const Button = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
    background: palevioletred;
    color: white;
    border-radius: 3px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background: blueviolet;
    }
`;

export default Form;
