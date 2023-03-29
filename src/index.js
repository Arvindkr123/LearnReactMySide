import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const arr = [10, 20, 30, 40, 50];
ReactDOM.createRoot(document.getElementById("root")).render(<App arr={arr}/>);
