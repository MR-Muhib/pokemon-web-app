import { useState } from "react";

const usePokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon((prev) => [...prev, data]); // Add fetched Pokémon to the list
    } catch (error) {
      console.error("Failed to fetch Pokémon:", error);
    }
  };

  return {
    pokemon,
    fetchPokemon,
  };
};

export default usePokemon;
