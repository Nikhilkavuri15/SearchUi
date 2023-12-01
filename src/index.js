import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResultDataContextProvider } from "./context/Resultdata";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResultDataContextProvider>
      <App />
    </ResultDataContextProvider>
  </React.StrictMode>
);
