function Search ({search, setSearch}) {

    return (
        <div className="search">
        <label htmlFor="search">Search:</label>
          <input
            className = "searchTerm"
            type="text"
            id="search"
            placeholder="Search..."
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      );
}

export default Search;