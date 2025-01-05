import PropTypes from "prop-types";

const FavoriteView = ({ pokemon }) => {
  return (
    <div key={pokemon.name} className="bg-white p-3 shadow-sm rounded-sm">
      <h2 className="font-semibold uppercase italic underline text-blue-500 mb-2">
        {pokemon.name}
      </h2>

      <img
        className="duration-300 hover:scale-150 mx-auto cursor-move"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />

      {/* Current Pokemon Details */}
      <CurrentPokemonDetailsMap
        option={{
          title: "Abilities",
          currentPokemon: pokemon,
          property: "abilities",
        }}
      />
      <CurrentPokemonDetailsMap
        option={{
          title: "Types",
          currentPokemon: pokemon,
          property: "types",
        }}
      />
    </div>
  );
};

// Reusable component for mapped properties
const CurrentPokemonDetailsMap = ({ option }) => {
  const { currentPokemon, property, title } = option;

  // Ensure that the property exists and is an array
  const items = currentPokemon[property] || [];

  return (
    <div className="flex flex-wrap">
      <h3 className="text-black pr-1 font-semibold">{title}: </h3>

      {items.length > 0 ? (
        items.map((item, index) => (
          <p key={item.ability?.name || item.type?.name || index}>
            <span className="text-gray-600">
              {item.ability?.name || item.type?.name}
            </span>
          </p>
        ))
      ) : (
        <p className="text-gray-500">No {title.toLowerCase()} available.</p>
      )}
    </div>
  );
};

// prop-types

FavoriteView.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    abilities: PropTypes.array,
    types: PropTypes.array,
  }).isRequired,
};

CurrentPokemonDetailsMap.propTypes = {
  option: PropTypes.shape({
    title: PropTypes.string,
    currentPokemon: PropTypes.shape({
      abilities: PropTypes.array,
      types: PropTypes.array,
    }),
    property: PropTypes.string,
  }),
};

export default FavoriteView;
