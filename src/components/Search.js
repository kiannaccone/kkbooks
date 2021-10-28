import styled from 'styled-components';

function Search ({search, setSearch}) {

    return (
        <SearchBar className="search">
        <label htmlFor="search"> 🔎  </label>
          <input
            className = "searchTerm"
            type="text"
            id="search"
            placeholder=" Browse by books and authors..."
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBar>
      );
}

export default Search;

const SearchBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  padding: 4%;
  font-size: 25px;
    .searchTerm{
      font-size: 20px;
      width: 30%;
    }
`