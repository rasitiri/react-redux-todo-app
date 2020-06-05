import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import TodoContainer from "./containers/TodoContainer";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <TodoContainer/>
    </Provider>,
    document.getElementById("root")
);
