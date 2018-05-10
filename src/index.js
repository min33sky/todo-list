import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { injectGlobal } from "styled-components";

injectGlobal`
    body{
        background: papayawhip;
        color: palevioletred;
    }
`;

ReactDOM.render(<App />, document.getElementById("root"));
