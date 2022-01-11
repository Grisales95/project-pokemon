import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoggedProvider from "./context/authContext";

ReactDOM.render(
  <React.StrictMode>
    <LoggedProvider>
      <App />
    </LoggedProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
