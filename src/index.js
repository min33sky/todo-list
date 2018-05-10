import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { injectGlobal } from "styled-components";

injectGlobal`
    body{
        margin: 0;
        padding: 0;
        background: papayawhip;
        color: palevioletred;
        font-family: 'Nanum Pen Script', cursive;
    }
`;

ReactDOM.render(<App />, document.getElementById("root"));
