import { IconEye } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <article className="rounded-md overflow-hidden shadow-lg border-2  sm:hover:scale-105 transition-all dark:bg-darkblue dark:border-verydarkblue h-[381px] w-[300px] hover:-translate-y-2">
      <header className="rounded-t-md overflow-hidden relative">
        <Link to={`/country/${country.cca2}`}>
          <img
            className="h-[203px] w-full object-fill"
            src={country.flags.png}
            alt=""
          />
          <div className="bg-black/50 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-all grid place-items-center text-white ">
            <IconEye size={60} />
          </div>
        </Link>
      </header>
      <main className="p-6 grid gap-4 ">
        <Link to={`/country/${country.cca2}`} className="">
          <h3 className="font-bold hover:underline dark:text-white transition-all text-black ">
            {country.name.common}
          </h3>
        </Link>
        <ul className="grid font-bold text-sm pb-5 gap-1 ">
          <li className="text-verydarkbluelight dark:text-white ">
            Population:{" "}
            <span className="font-normal">{country.population}</span>
          </li>
          <li className="text-verydarkbluelight dark:text-white">
            Region: <span className="font-normal">{country.region}</span>
          </li>
          <li className="text-verydarkbluelight dark:text-white">
            Capital: <span className="font-normal">{country.capital}</span>
          </li>
        </ul>
      </main>
    </article>
  );
};
export default CountryCard;
