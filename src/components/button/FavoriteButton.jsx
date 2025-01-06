import PropTypes from "prop-types";
import { useFavorites } from "../../context/FavoritesContext";
import usePokemon from "../../services/api/Pokemon";
import { useEffect, useState } from "react";

// import react icons
import { IoIosHeart } from "react-icons/io";

const FavoriteButton = ({ currentPokemon }) => {
  const [isFavoriteColor, setIsFavoriteColor] = useState(false);

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
    setIsFavoriteColor(!isFavoriteColor);
    if (isFavorite) {
      removeFavorite(currentPokemon.name);
    } else {
      addFavorite(newCurrentPokemon);
    }
  };

  const buttonStyle =
    "w-full px-2 py-2 text-gray-500 font-semibold border border-gray-400 rounded-md text-sm flex items-center justify-center";
  const heartColor = isFavorite ? "text-red-500" : "text-gray-500";

  return (
    <div className="w-full flex">
      <button className={`${buttonStyle}`} onClick={handleFavoriteClick}>
        <IoIosHeart className={`w-5 h-5  ${heartColor} mr-2`} />

        {isFavorite ? "Favorited" : "Favorite"}
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
