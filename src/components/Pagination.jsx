import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { paginationLogic } from "../utils/pagination";

import PaginationBtn from "./PaginationBtn";

const Pagination = ({ countries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginationLogic(
    currentPage,
    countries
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [countries]);
  return (
    <main className=" py-10 transition-all">
      {itemsInCurrentPage.length === 0 ? (
        <span className="text-lg px-5">No countries found...</span>
      ) : (
        <section>
          <ul
            className={`  px-5 sm:px-0 transition-all  ${
              itemsInCurrentPage.length > 2
                ? "grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center gap-10 sm:gap-5 "
                : "flex justify-center  gap-5"
            } `}
          >
            {itemsInCurrentPage.map((country) => (
              <CountryCard key={country.cca2} country={country} />
            ))}
          </ul>
          <PaginationBtn
            lastPage={lastPage}
            pagesInCurrentBlock={pagesInCurrentBlock}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </section>
      )}
    </main>
  );
};
export default Pagination;
