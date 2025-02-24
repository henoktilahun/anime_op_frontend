import "./SearchBar.css";

function SearchBar({ handleSearchInput }) {
  return (
    <section className="searchbar__container">
      <div className="searchbar">
        <input
          type="text"
          className="searchbar-input"
          id="searchbar"
          placeholder="Search Here"
          onChange={handleSearchInput}
        />
      </div>
    </section>
  );
}

export default SearchBar;
