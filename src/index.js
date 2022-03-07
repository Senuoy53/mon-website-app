import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./styles/context";

// Global state
import { Provider } from "react-redux";
import ourStore from "./store";

ReactDOM.render(
  <Provider store={ourStore}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
