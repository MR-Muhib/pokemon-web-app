import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import usePokemon from "../../services/api/getPokemon";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");


  // 
  const { pokemon, loading, error } = usePokemon();
  console.log(pokemon);

  // Handle input change
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  /* const HandleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setfilterCountry(newCountries);
  };

  // Trigger search whenever searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      HandleSearch(searchQuery);
    } else {
      setFilterCountry(countries);
    }
  }, []); */

  return (
    <label className="input input-bordered flex items-center gap-2 search">
      <input
        type="text"
        onChange={handleChange}
        className="grow"
        placeholder="Search..."
        value={searchQuery}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};

// Prop types for validation
Search.propTypes = {
  onSearch: PropTypes.func.isRequired, // Ensuring the parent component passes a function to handle search
};

export default Search;
