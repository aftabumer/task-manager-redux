import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskManager from "./components/TaskManager";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <TaskManager />
  </Provider>,
  document.getElementById("root")
);
