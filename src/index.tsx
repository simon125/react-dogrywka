import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecipeSearchContextProvider } from "./contexts/RecipeSearchContext";

import "@picocss/pico";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeSearchContextProvider>
        <App />
      </RecipeSearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
