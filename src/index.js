import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NavigationProvider } from "./context/Navigation";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
);
