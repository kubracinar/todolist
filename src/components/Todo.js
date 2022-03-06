import React from "react";
import {Button ,Form} from "react-bootstrap";
function Todo({ todo, index, markTodo, removeTodo }) {
    return (
        <div
            className="todo"

        >
            <Form.Check
                onClick={() => markTodo(index)}
                checked={todo.isDone}
            /> <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>{' '}
            <div>
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
            </div>
        </div>
    );
}

export default Todo;
