import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const SearchContext = createContext();

const SearchProvider = ({ children, data, loading, error }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data || []);
  // console.log(filteredData);

  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();

    const filtered = data.filter((item) => {
      const itemName = item.name.toLowerCase();
      return itemName.startsWith(value);
    });
    setFilteredData(filtered);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      setFilteredData(data || []);
    }
  }, [searchQuery, data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data.</div>;

  return (
    <SearchContext.Provider value={{ handleChange, searchQuery, filteredData }}>
      {children}
    </SearchContext.Provider>
  );
};

// PropTypes
SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export const useSearch = () => useContext(SearchContext);

export default SearchProvider;
