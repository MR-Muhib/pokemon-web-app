import PropTypes from "prop-types";

const PokemonImage = ({ spriteURL, currentPokemon }) => {
  return (
    <>
      <img
        className="w-80 h-auto hover:scale-150 duration-300"
        src={spriteURL}
        alt={currentPokemon.name}
      />
    </>
  );
};

// prop-types

PokemonImage.propTypes = {
  spriteURL: PropTypes.string.isRequired,
  currentPokemon: PropTypes.object.isRequired,
};

export default PokemonImage;
