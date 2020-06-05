import React, { useRef } from "react";
import classes from "./todo.module.css";

const Todo = (props) => {
    const textInput = useRef(null);

    const addTodo = () => {
        props.addTodo(textInput.current.value);
        textInput.current.value = "";
    };

    const deleteTodo = (id) => {
        props.deleteTodo(id);
    };

    const completeTodo = (id) => {
        props.completeTodo(id);
    };

    return (
        <div className={classes.container}>
            <div>
                <h1>Todo Component</h1>
                <input
                    type="text"
                    ref={textInput}
                    placeholder="Type something..."
                    onKeyPress={(e) => {
                        if (e.key === "Enter") addTodo();
                    }}
                />
                <button onClick={addTodo}>Add</button>
                <ul>
                    {props.state.todoReducer.length > 0
                        ? props.state.todoReducer.map((item, index) => (
                              <li key={index}>
                                  <p
                                      style={{
                                          textDecoration: item.done
                                              ? "line-through"
                                              : null,
                                      }}
                                  >
                                      {item.text}
                                  </p>
                                  <span className={classes.sign}>
                                      <span onClick={() => deleteTodo(item.id)}>
                                          ✗
                                      </span>
                                      <span
                                          onClick={() => completeTodo(item.id)}
                                      >
                                          ✓
                                      </span>
                                  </span>
                              </li>
                          ))
                        : null}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
