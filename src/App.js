import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";

class App extends Component {
    render() {
        return <TodoListTemplate form={<Form />}>목록1</TodoListTemplate>;
    }
}

export default App;
