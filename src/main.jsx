// main css path
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// import router
import { router } from "./router/Router";
import { FavoritesProvider } from "./context/FavoritesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </StrictMode>
);
