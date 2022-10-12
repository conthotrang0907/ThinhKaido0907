import React from "react";
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ContextProvider from "./component/store/ContextProvider";

import SearchProvider from "./component/store/SearchProvider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ContextProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
