import PropTypes from "prop-types";
import { useFavorites } from "../../context/FavoritesContext";

const FavoriteButton = ({ currentPokemon }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  // console.log(currentPokemon);

  const isFavorite = favorites.some((p) => p.name === currentPokemon.name);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(currentPokemon.name);
    } else {
      addFavorite(currentPokemon);
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
  currentPokemon: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default FavoriteButton;
