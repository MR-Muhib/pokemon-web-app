import { useFavorites } from "../context/FavoritesContext";
import FavoriteView from "../components/favoritespage/FavoriteView";

export default function Favorites() {
  const { favorites } = useFavorites();
  // console.log(favorites);

  if (favorites.length === 0) {
    return (
      <p className="text-blue-500 font-2xl text-center p-8">
        No favorites added yet!
      </p>
    );
  }

  return (
    <div className="bg-white w-full h-auto px-5 py-2">
      <div className="container bg-slate-50 mx-auto">
        {/* page title for favorite pokemon */}
        <h1 className="text-center font-semibold text-2xl  p-2 italic text-gray-600 underline ">
          Favorites
        </h1>

        {/* pokemon card */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-4">
          {favorites.map((pokemon) => (
            <FavoriteView key={pokemon?.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}
