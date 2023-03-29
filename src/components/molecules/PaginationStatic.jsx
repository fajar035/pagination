import React from "react";

function PaginationStatic({
  activePage,
  totalPage,
  onMovePage,
  onFirstPage,
  onLastPage,
}) {
  const movePage = (val) => {
    onMovePage(val);
  };

  const firstPage = (val) => {
    onFirstPage(val);
  };

  const lastPage = (val) => {
    onLastPage(val);
  };

  return (
    <div>
      <button onClick={() => firstPage(1)}>First</button>
      {activePage === 1 ? (
        <>
          <button className="active" onClick={() => movePage(activePage)}>
            {activePage}
          </button>
          <button onClick={() => movePage(activePage + 1)}>
            {activePage + 1}
          </button>
          <button onClick={() => movePage(activePage + 2)}>
            {activePage + 2}
          </button>
        </>
      ) : activePage === totalPage ? (
        <>
          <button onClick={() => movePage(activePage - 2)}>
            {activePage - 2}
          </button>
          <button onClick={() => movePage(activePage - 1)}>
            {activePage - 1}
          </button>
          <button className="active" onClick={() => movePage(activePage)}>
            {activePage}
          </button>
        </>
      ) : (
        <>
          <button onClick={() => movePage(activePage - 1)}>
            {activePage - 1}
          </button>
          <button className="active" onClick={() => movePage(activePage)}>
            {activePage}
          </button>
          <button onClick={() => movePage(activePage + 1)}>
            {activePage + 1}
          </button>
        </>
      )}
      <button onClick={() => firstPage(totalPage)}>Last</button>
    </div>
  );
}

export default PaginationStatic;
