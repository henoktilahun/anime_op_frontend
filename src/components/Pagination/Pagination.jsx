import "./Pagination.css";

function Pagination({ currentPage, setCurrnetPage, activeMediaPlayer }) {
  return (
    <div
      className={`pagination-containor ${
        activeMediaPlayer ? "pagination--with-player" : ""
      }`}
    >
      <div className="pagination">
        <button
          className="pagination__button"
          onClick={() => setCurrnetPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="pagination__button"
          onClick={() => setCurrnetPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
      <div>
        <p>Page: {currentPage}</p>
      </div>
    </div>
  );
}

export default Pagination;
