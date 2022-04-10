import React from "react";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import App from "./App";

import "./styles/global.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);
