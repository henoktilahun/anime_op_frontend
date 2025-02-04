import "./Pagination.css";

function Pagination({ currentPage, setCurrnetPage, totalPages }) {
  return (
    <div className="pagination-containor">
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
        {/* <p>of</p>
            <p>{totalPages}</p> */}
      </div>
    </div>
  );
}

export default Pagination;
