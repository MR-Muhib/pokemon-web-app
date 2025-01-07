import PropTypes from "prop-types";
// import Button from "./Button";
import { Link } from "react-router-dom";
import FavoriteButton from "../button/FavoriteButton";

const Pokemon = ({ pokemon, spriteURL }) => {
  // console.log(pokemon);

  return (
    <div className="bg-white p-2 shadow-sm shadow-gray-300 rounded-md">
      <img
        src={spriteURL}
        alt={pokemon.name}
        className="mx-auto w-28 h-28 bg-gray-100 rounded-full p-4 m-4"
      />

      <h3 className="uppercase font-semibold mb-4 text-center text-xl text-black ">
        {pokemon.name}
      </h3>

      <div className="flex mx-auto gap-5  items-center justify-around text-center">
        <div className="w-[50%]">
          <FavoriteButton currentPokemon={pokemon} />
        </div>

        <Link
          className="px-2 py-3 w-[50%] rounded-md bg-blue-500 text-white font-semibold text-sm"
          to={`/pokemon/${pokemon?.name}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
  spriteURL: PropTypes.string.isRequired,
};

export default Pokemon;
