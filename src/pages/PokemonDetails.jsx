import { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../services/api/Pokemon";
import PokemonView from "../components/pokemon-details/PokemonView";

const PokemonDetails = () => {
  const { name } = useParams();
  const { pokemon, fetchPokemon } = usePokemon();
  // console.log(pokemon);

  useEffect(() => {
    if (!pokemon.find((p) => p.name === name)) {
      fetchPokemon(name); // Fetch the Pokémon details dynamically
    }
  }, [name, pokemon, fetchPokemon]);

  const currentPokemon = pokemon.find((p) => p.name === name);

  if (!currentPokemon) {
    return (
      <p className="text-center mt-10 font-semibold text-black text-xl">
        Loading Pokémon details...
      </p>
    );
  }

  const spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon.id}.png`;

  return (
    <div className="px-5 py-2">
      <PokemonView currentPokemon={currentPokemon} spriteURL={spriteURL} />
    </div>
  );
};

export default PokemonDetails;
