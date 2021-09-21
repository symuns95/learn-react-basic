import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./Reac_Fundamental/index";
// import App from "./React_Crush_Course_2020/App";
// import App from "./React_Crush_Course_2020/projects/App";
// import App from "./Learn_React_StackLearner/App";
import PracticeApp from "./Practice_React/app";

ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <PracticeApp />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
