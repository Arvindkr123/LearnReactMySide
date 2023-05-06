import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// let element = <h1>Welcome Back Arvind</h1> // JSX Code Browser doesn't understand this code it's understand only JS code
// let element = React.createElement('h1', {}, 'Welcome back Arvind'); // This is the Java Script Code
// ReactDOM.render(App, document.getElementById("root"));

// if component we have used just like html elemenet
// ReactDOM.render(<App></App>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
