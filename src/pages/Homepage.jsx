import Pokemon from "../components/homepage/Pokemon";
import { useSearch } from "../context/SearchContext";

const Homepage = () => {
  const { filteredData } = useSearch(); // call api function
  const pokemons = filteredData;

  return (
    <div className="w-full bg-gray-100 px-5 py-2">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2  md:grid-cols-3  gap-2  ">
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
