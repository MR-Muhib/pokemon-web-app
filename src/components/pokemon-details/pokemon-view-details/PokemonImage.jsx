import PropTypes from "prop-types";

const PokemonImage = ({ spriteURL, currentPokemon }) => {
  return (
    <div className="w-[50%] h-auto flex items-center justify-center mx-auto">
      <img
        className="w-44 h-44 mx-auto hover:scale-150 duration-300"
        src={spriteURL}
        alt={currentPokemon.name}
      />
    </div>
  );
};

// prop-types

PokemonImage.propTypes = {
  spriteURL: PropTypes.string.isRequired,
  currentPokemon: PropTypes.object.isRequired,
};

export default PokemonImage;
