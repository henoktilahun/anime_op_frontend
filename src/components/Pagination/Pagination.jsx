import "./Pagination.css";

function Pagination({currentPage, setCurrnetPage, totalPages}) {

  return (
      <div className="pagination">
        <div className="pagination-2">
            <button onClick={() => setCurrnetPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
            <button onClick={() => setCurrnetPage(currentPage + 1)}>Next</button>
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
