import React, { useEffect, useState } from "react";

function PaginationLoop({
  activePage,
  totalPage,
  onMovePage,
  onFirstPage,
  onLastPage,
}) {
  const [pages, setPages] = useState([]);
  const movePage = (val) => {
    onMovePage(val);
  };

  const firstPage = (val) => {
    onFirstPage(val);
  };

  const lastPage = (val) => {
    onLastPage(val);
  };

  useEffect(() => {
    if (activePage === 1)
      return setPages([activePage, activePage + 1, activePage + 2]);
    if (activePage === totalPage)
      return setPages([activePage - 2, activePage - 1, activePage]);
    return setPages([activePage - 1, activePage, activePage + 1]);
  }, [activePage]);

  return (
    <div>
      <button onClick={() => firstPage(1)}>First</button>
      {totalPage < 3
        ? [...Array(totalPage)].map((e, idx) => (
            <button
              key={idx}
              onClick={() => movePage(idx + 1)}
              className={`${activePage === idx + 1 ? "active" : ""}`}>
              {idx + 1}
            </button>
          ))
        : pages.map((e, idx) => (
            <button
              key={idx}
              onClick={() => movePage(e)}
              className={`${activePage === e ? "active" : ""}`}>
              {e}
            </button>
          ))}
      <button onClick={() => lastPage(totalPage)}>Last</button>
    </div>
  );
}

export default PaginationLoop;
