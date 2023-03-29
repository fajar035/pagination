import { useEffect, useState } from "react";
import "./App.css";
import PaginationStatic from "./components/molecules/PaginationStatic";
import PaginationLoop from "./components/molecules/PaginationLoop";
import fakeName from "../generatesNames";

function App() {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const movePage = (val) => setActivePage(val);
  const firstPage = (val) => setActivePage(val);
  const lastPage = (val) => setActivePage(val);

  useEffect(() => {
    setTotalPage(Math.ceil(fakeName.length / limit));
  }, []);

  useEffect(() => {
    let temp = [];
    const start = activePage === 1 ? 0 : (activePage - 1) * limit;
    const end = activePage === 1 ? limit : (activePage - 1) * limit + limit;
    for (let i = start; i < end; i++) {
      temp.push(fakeName[i]);
    }
    setData(temp);
  }, [activePage]);

  return (
    <section className="App">
      <div className="static">
        <h1>Pagination Static</h1>
        <br />
        {data.map((e, idx) => {
          return (
            <p key={idx} style={{ textAlign: "center" }}>
              {e.id}: {e.name}
            </p>
          );
        })}
        <br />
        <PaginationStatic
          activePage={activePage}
          totalPage={totalPage}
          onMovePage={movePage}
          onFirstPage={firstPage}
          onLastPage={lastPage}
        />
      </div>
      <div className="loop">
        <h1>Pagination Loop</h1>
        <br />
        {data.map((e, idx) => {
          return (
            <p key={idx} style={{ textAlign: "center" }}>
              {e.id}: {e.name}
            </p>
          );
        })}
        <br />
        <PaginationLoop
          activePage={activePage}
          totalPage={totalPage}
          onMovePage={movePage}
          onFirstPage={firstPage}
          onLastPage={lastPage}
        />
      </div>
    </section>
  );
}

export default App;
