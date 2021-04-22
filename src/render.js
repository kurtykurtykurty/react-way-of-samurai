import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { addPost } from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerenderEntireTree;
