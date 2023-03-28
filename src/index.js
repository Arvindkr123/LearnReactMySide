import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Student from "./Student";

ReactDOM.createRoot(document.getElementById('root')).render(<Student>I am Child {125}</Student>)