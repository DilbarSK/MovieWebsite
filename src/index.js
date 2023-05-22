import React from "react";
import App from "./App";
import ReactDom from "react-dom/client";
import { AppProvider } from "./context";

const root = ReactDom.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
