import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore} from "redux";
import { Provider } from "react-redux"
import counter from "./reducer";
import App from "./App";
import "./index.css";

console.log('-- index.js 실행');
console.log('---------- index.js 렌더링 전 ----------');
var destination = document.querySelector("#container");
console.log('---------- index.js 렌더링 후 ----------');
// 스토어
console.log('------- index.js createStore 전-------');
var store = createStore(counter);
console.log('------- index.js createStore 후-------');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    destination
);