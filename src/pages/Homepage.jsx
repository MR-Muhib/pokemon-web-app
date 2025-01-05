import Pokemon from "../components/homepage/Pokemon";
import usePokemon from "../services/api/getPokemon";

const Homepage = () => {
  const fetchPokemon = usePokemon();

  const pokemons = fetchPokemon.pokemon;

  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-2 ">
          {pokemons.map((pokemon) => {
            // Extract Pokémon ID from the URL
            const id = pokemon.url
              .split("/")
              .filter(Boolean) // Remove empty strings from split results
              .pop(); // Get the last part, which is the ID

            const spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            return (
              <Pokemon
                key={pokemon.name}
                pokemon={pokemon}
                spriteURL={spriteURL}
                fetchPokemon={fetchPokemon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
