// main css path
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// import router
import { router } from "./router/Router";
import { FavoritesProvider } from "./context/FavoritesContext";
import SearchProvider from "./context/SearchContext";
import usePokemon from "./services/api/getPokemon";

// App component to fetch data and provide context
const App = () => {
  const { pokemon, loading, error } = usePokemon(); // Move hook usage inside a React component

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <SearchProvider data={pokemon} loading={loading} error={error}>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </SearchProvider>
  );
};

// Render the App component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
