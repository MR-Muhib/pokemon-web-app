import PropTypes from "prop-types";
import { useFavorites } from "../../context/FavoritesContext";
import usePokemon from "../../services/api/Pokemon";
import { useEffect } from "react";

const FavoriteButton = ({ currentPokemon }) => {
  const { name } = currentPokemon;
  // console.log(currentPokemon);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  // find current pokemon array
  const { pokemon, fetchPokemon } = usePokemon();
  // console.log(pokemon);

  useEffect(() => {
    if (!pokemon.find((p) => p.name === name)) {
      fetchPokemon(name); // Fetch the Pokémon details dynamically
    }
  }, [name, pokemon, fetchPokemon]);

  const newCurrentPokemon = pokemon.find((p) => p.name === name);
  // console.log(newCurrentPokemon);

  if (!currentPokemon) {
    return (
      <p className="text-center mt-10 font-semibold text-black text-xl">
        Loading Pokémon details...
      </p>
    );
  }

  // console.log(currentPokemon);

  const isFavorite = favorites.some((p) => p.name === currentPokemon.name);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(currentPokemon.name);
    } else {
      addFavorite(newCurrentPokemon);
    }
  };

  // handle dynamic color change
  const buttonColor = isFavorite
    ? "bg-red-500 px-2 py-2 text-sm w-full rounded-md text-white font-semibold "
    : "bg-blue-500 px-2 py-2 text-sm w-full rounded-md text-white font-semibold ";

  return (
    <div className="flex mx-auto item-center justify-center m-5">
      <button className={buttonColor} onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

// prop-types

FavoriteButton.propTypes = {
  currentPokemon: PropTypes.object,
  favorites: PropTypes.array,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
};

export default FavoriteButton;
