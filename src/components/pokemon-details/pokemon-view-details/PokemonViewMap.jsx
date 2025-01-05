import PropTypes from "prop-types";

const PokemonViewWithMap = ({ currentPokemon, property, title }) => (
  <div>
    <table className="min-w-full border-collapse">
      <thead>
        <tr className="bg-gray-500 text-white font-semibold">
          <th className="border px-4 py-2 text-left">{title}</th>
        </tr>
      </thead>

      {/* table body side */}
      <tbody>
        {currentPokemon[property].map((item, index) => (
          <tr
            key={item.ability?.name || item.type?.name || index}
            className="border-b"
          >
            <td className="px-4 py-2">
              {item.ability?.name || item.type?.name || ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// PropTypes for `PokemonViewWithMap`
PokemonViewWithMap.propTypes = {
  currentPokemon: PropTypes.object.isRequired,
  property: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PokemonViewWithMap;
