import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    // Load favorites from localStorage on initialization
    const storedFavorites = localStorage.getItem("favorites");

    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    // Save favorites to localStorage whenever the state changes
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (pokemon) => {
    setFavorites((prev) => [...prev, pokemon]);
  };

  const removeFavorite = (pokemonName) => {
    setFavorites((prev) => prev.filter((p) => p.name !== pokemonName));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
