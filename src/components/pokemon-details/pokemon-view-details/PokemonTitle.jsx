import PropTypes from "prop-types";

const PokemonTitle = ({ currentPokemon }) => {
  return (
    <h1 className="font-bold uppercase italic underline text-blue-700 text-xl">
      {currentPokemon.name}
    </h1>
  );
};

PokemonTitle.propTypes = {
  currentPokemon: PropTypes.object.isRequired,
};

export default PokemonTitle;
