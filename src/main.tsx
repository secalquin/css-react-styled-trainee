import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MainContextProvider } from "./contexts/mainContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>
);
