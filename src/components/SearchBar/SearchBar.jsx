import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="searchbar__container">
      <div className="searchbar">
        <input
          type="text"
          className="searchbar-input"
          id="searchbar"
          placeholder="Search Here"
          //onChange={handleEmailChange}
          //value={email}
        />
      </div>
    </section>
  );
}

export default SearchBar;
