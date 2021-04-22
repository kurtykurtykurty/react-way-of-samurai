import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "hello, pidor", likesCount: "0" },
  { id: 2, message: "my secod post", likesCount: "0" },
];

let dialogs = [
  {
    id: 1,
    name: "Joka",
  },
  {
    id: 2,
    name: "Boka",
  },
];

let messages = [
  { id: 1, message: "hi" },
  { id: 2, message: "wooohooo" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
