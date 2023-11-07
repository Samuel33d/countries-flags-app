import {
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
} from "@tabler/icons-react";

const PaginationBtn = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <section className="px-5 py-10  ">
      <ul className="flex justify-center sm:gap-5  gap-2 flex-wrap ">
        {currentPage !== 1 && (
          <button
            className="sm:h-10 sm:w-10 h-8 text-sm sm:text-base transition-all border shadow-md w-8 flex justify-center items-center  rounded-full dark:bg-darkblue  border-black dark:border-white"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <IconPlayerTrackPrevFilled className="mx-auto z-50 " size={15} />
          </button>
        )}
        {pagesInCurrentBlock.map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page)}
              className={`  ${
                page === currentPage &&
                "bg-slate-500 text-white dark:bg-verydarkblue transition-all"
              } sm:h-10 sm:w-10 h-8 text-sm sm:text-base transition-all border shadow-md w-8 flex justify-center items-center rounded-full dark:bg-darkblue  border-black dark:border-white`}
            >
              {page}
            </button>
          </li>
        ))}

        {currentPage === lastPage ? (
          ""
        ) : (
          <button
            className="sm:h-10 sm:w-10 h-8 text-sm sm:text-base transition-all border shadow-md w-8 flex justify-center items-center  rounded-full dark:bg-darkblue border-black dark:border-white"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <IconPlayerTrackNextFilled className="mx-auto z-50" size={15} />
          </button>
        )}
      </ul>
    </section>
  );
};
export default PaginationBtn;
