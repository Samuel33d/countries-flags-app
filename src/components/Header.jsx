import { IconMoon, IconSun } from "@tabler/icons-react";

import { Link } from "react-router-dom";

const Header = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <header className="absolute top-0 left-0 h-fit z-50 border dark:border-darkblue   w-full  p-3  py-6 shadow-lg dark:bg-darkblue dark:text-white transition-all md:px-10">
      <nav className="md:px-5  mx-auto flex items-center justify-between font-nunito  text-sm  bg-transparent sm:text-2xl transition-all">
        <Link to={"/"}>
          {" "}
          <h1 className="font-bold dark:text-white text-black">
            Where in the world?
          </h1>
        </Link>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="font-semibold flex items-center gap-2 sm:text-lg"
        >
          {isDarkMode ? (
            <span className="flex gap-1 items-center dark:text-white text-black">
              <IconSun /> Light Mode
            </span>
          ) : (
            <span className="flex gap-1 items-center dark:text-white text-black">
              <IconMoon /> Dark Mode
            </span>
          )}
        </button>
      </nav>
    </header>
  );
};
export default Header;
