import PropTypes from "prop-types";

const PokemonTitle = ({ currentPokemon }) => {
  return (
    <h1 className="font-bold uppercase italic underline text-blue-700 text-xl my-5">
      {currentPokemon.name}
    </h1>
  );
};

PokemonTitle.propTypes = {
  currentPokemon: PropTypes.object.isRequired,
};

export default PokemonTitle;
