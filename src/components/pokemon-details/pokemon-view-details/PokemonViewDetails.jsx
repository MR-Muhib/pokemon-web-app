import PropTypes from "prop-types";
import PokemonViewWithMap from "./PokemonViewMap";

const PokemonViewDetails = ({ currentPokemon }) => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Abilities */}
      <PokemonViewWithMap
        currentPokemon={currentPokemon}
        property="abilities"
        title="Abilities"
      />

      {/* Types */}
      <PokemonViewWithMap
        currentPokemon={currentPokemon}
        property="types"
        title="Types"
      />

      {/* Base Stats */}

      <h2 className="bg-gray-500 text-white font-semibold border px-4 py-2 text-left">Base Stats:</h2>
      <ul>
        {currentPokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

PokemonViewDetails.propTypes = {
  currentPokemon: PropTypes.object.isRequired,
};

export default PokemonViewDetails;
