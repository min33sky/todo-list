import React from "react";
import styled from "styled-components";

const TodoListTemplate = ({ form, children }) => {
    return (
        <Main>
            <Header>오늘 할 일</Header>
            <Form>{form}</Form>
            <List>{children}</List>
        </Main>
    );
};

const Main = styled.main`
    background: white;
    width: 512px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 0 auto;
    margin-top: 4rem;
`;

const Header = styled.header`
    padding: 2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 100;
    background: palevioletred;
    color: white;
`;

const Form = styled.section`
    padding: 1rem;
    border-bottom: 1px solid palevioletred;
`;

const List = styled.section`
    min-height: 5rem;
`;

export default TodoListTemplate;
