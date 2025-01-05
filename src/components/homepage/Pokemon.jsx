import PropTypes from "prop-types";
// import Button from "./Button";
import { Link } from "react-router-dom";
import FavoriteButton from "../button/FavoriteButton";

const Pokemon = ({ pokemon, spriteURL }) => {
  // console.log(fetchPokemon);

  return (
    <div className="bg-white p-2 shadow-sm shadow-gray-200 rounded-sm">
      <img src={spriteURL} alt={pokemon.name} className="mx-auto " />

      <h3 className="text-md uppercase font-semibold mb-2 ">{pokemon.name}</h3>

      <Link
        className="text-blue-400 italic hover:underline"
        to={`/pokemon/${pokemon?.name}`}
      >
        View Details...
      </Link>

      {/* dynamic favorite button component */}
      <FavoriteButton currentPokemon={pokemon} />
    </div>
  );
};
Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
  spriteURL: PropTypes.string.isRequired,
};

export default Pokemon;
