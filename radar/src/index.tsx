import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { devWrapper } from "./index.styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className={devWrapper}>
      <App />
    </div>
  </React.StrictMode>
);
