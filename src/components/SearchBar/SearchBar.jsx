import "./SearchBar.css"

function SearchBar() {
    return (
        <section className="searchbar">
            <div className="searchbar__containter">
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
    )
}

export default SearchBar