import PropTypes from "prop-types";
import FavoriteButton from "../button/FavoriteButton";
import PokemonImage from "./pokemon-view-details/PokemonImage";
import PokemonViewDetails from "./pokemon-view-details/PokemonViewDetails";
import PokemonTitle from "./pokemon-view-details/PokemonTitle";
import usePokemon from "../../services/api/getPokemon.js";

const PokemonView = ({ currentPokemon, spriteURL }) => {
  const { pokemon } = usePokemon();
  // find current Pokemon
  const foundPokemon = pokemon.find((p) => p.name === currentPokemon.name);

  if (!foundPokemon) {
    return <h1>No such Pokemon found</h1>;
  }
  // console.log(foundPokemon);

  return (
    <div className=" w-full h-auto ">
      <div className="container mx-auto  rounded-md">
        <PokemonTitle currentPokemon={currentPokemon} />

        <div className="md:flex justify-around bg-slate-50 p-5  rounded-sm">
          <PokemonImage spriteURL={spriteURL} currentPokemon={currentPokemon} />

          <PokemonViewDetails currentPokemon={currentPokemon} />
        </div>

        <FavoriteButton currentPokemon={foundPokemon} />
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
