import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

const Pokemons = ({ pokemon, spriteURL }) => {
  return (
    <div className="bg-white p-2 shadow-sm shadow-gray-200 rounded-sm">
      <img src={spriteURL} alt={pokemon.name} className="mx-auto " />

      <h3 className="text-md uppercase font-semibold mb-2 ">{pokemon.name}</h3>

      <Link to={`/pokemon/${pokemon?.name}`}>View Details</Link>

      {/* Add to Favorites */}
      <Button />
    </div>
  );
};
Pokemons.propTypes = {
  pokemon: PropTypes.object.isRequired,
  spriteURL: PropTypes.string.isRequired,
};

export default Pokemons;
