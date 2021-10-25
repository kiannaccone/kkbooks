function Search () {
    return (
        <div className="search">
        <label htmlFor="search">Search:</label>
          <input
            className = "searchTerm"
            type="text"
            id="search"
            placeholder="Search..."
            // value = {search}
            // onChange={handleSearch}
          />
        </div>
      );
}

export default Search;