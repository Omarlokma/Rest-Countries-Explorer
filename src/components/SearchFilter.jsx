function SearchFilter({ searchTerm, region, setSearchParams }) {
  const handleSearchChange = (e) => {
    setSearchParams(params => {
      params.set("search", e.target.value);
      return params;
    });
  };

  const handleRegionChange = (e) => {
    setSearchParams(params => {
      params.set("region", e.target.value);
      return params;
    });
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={region} onChange={handleRegionChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default SearchFilter;
