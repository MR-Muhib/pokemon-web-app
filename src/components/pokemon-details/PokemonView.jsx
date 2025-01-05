import PropTypes from "prop-types";
import FavoriteButton from "../button/FavoriteButton";
import PokemonImage from "./pokemon-view-details/PokemonImage";
import PokemonViewDetails from "./pokemon-view-details/PokemonViewDetails";
import PokemonTitle from "./pokemon-view-details/PokemonTitle";

const PokemonView = ({ currentPokemon, spriteURL }) => {
  console.log(currentPokemon);
  return (
    <div className="bg-white w-full h-auto">
      <div className="container mx-auto p-5">
        <PokemonTitle currentPokemon={currentPokemon} />

        <div className="flex justify-around bg-slate-50 p-5 mt-2 rounded-sm">
          <PokemonImage spriteURL={spriteURL} currentPokemon={currentPokemon} />

          <PokemonViewDetails currentPokemon={currentPokemon} />
        </div>

        <FavoriteButton currentPokemon={currentPokemon} />
      </div>
    </div>
  );
};

// PropTypes for `PokemonView`
PokemonView.propTypes = {
  currentPokemon: PropTypes.object.isRequired,
  spriteURL: PropTypes.string.isRequired,
};

export default PokemonView;
