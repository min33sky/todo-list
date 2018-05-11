import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
    id = 3;
    state = {
        input: "",
        todos: [
            { id: 0, text: "안녕", checked: false },
            { id: 1, text: "리액트", checked: true },
            { id: 2, text: "반가워", checked: false }
        ]
    };

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: "",
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false
            })
        });
    };

    handleKeyPress = e => {
        if (e.key === "Enter") {
            this.handleCreate();
        }
    };

    handleToggle = id => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];
        const nextTodos = [...todos]; // 기존 배열 복사

        // 배열의 해당 값을 변경한다.
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    };

    handleRemove = id => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    };

    render() {
        const { input, todos } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove
        } = this;
        return (
            <TodoListTemplate
                form={
                    <Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                    />
                }
            >
                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </TodoListTemplate>
        );
    }
}

export default App;
