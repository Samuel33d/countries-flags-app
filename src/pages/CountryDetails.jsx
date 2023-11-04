import { IconArrowNarrowLeft } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const { id } = useParams();
  const countryToDetail = country[0];

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then(({ data }) => setCountry(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main className="min-h-screen  font-nunito bg-verylighgray dark:bg-verydarkblue  dark:text-white  relative grid place-items-center">
      <Link
        className="absolute top-32 left-3 sm:left-10 flex py-1 px-5 gap-2 dark:bg-darkblue w-fit text-sm items-center shadow-md border dark:border-verydarkblue"
        to={"/"}
      >
        <IconArrowNarrowLeft /> <span>Back</span>
      </Link>

      <section className="p-3 grid gap-5 my-44 md:grid-cols-2 max-w-[1024px] sm:gap-10">
        <header className="h-full w-full ">
          <img
            className="h-full w-full"
            src={countryToDetail?.flags.svg}
            alt=""
          />
        </header>
        <main className="grid gap-8">
          <div className="grid gap-5">
            <h2 className="font-bold text-lg w-full">
              {countryToDetail?.name.common}
            </h2>

            <div className="grid sm:grid-cols-2 sm:gap-10 place-items-start">
              <ul className="text-sm grid gap-3 font-semibold">
                <li>
                  Native Name:{" "}
                  <span className="dark:text-verylighgray font-normal">
                    {countryToDetail?.demonyms === undefined
                      ? "Unknown"
                      : countryToDetail?.demonyms.eng.m}
                  </span>
                </li>
                <li>
                  Population:{" "}
                  <span className="dark:text-verylighgray font-normal">
                    {countryToDetail?.population} residents
                  </span>
                </li>
                <li>
                  Region:{" "}
                  <span className="text-verylighgray font-normal">
                    {countryToDetail?.region}
                  </span>
                </li>
                <li>
                  Sub Region:{" "}
                  <span className="text-verylighgray font-normal">
                    {countryToDetail?.subregion}
                  </span>
                </li>
                <li>
                  Capital:{" "}
                  <span className="dark:text-verylighgray font-normal">
                    {countryToDetail?.capital === undefined
                      ? "Unknown"
                      : countryToDetail?.capital[0]}
                  </span>
                </li>
              </ul>
              <div>
                <ul className="text-sm grid gap-3 font-semibold">
                  <li className="">
                    Top Level Domain:{" "}
                    <span className="dark:text-verylighgray font-normal">
                      {countryToDetail?.tld[0]}{" "}
                    </span>
                  </li>
                  <li className="">
                    Currencies:
                    <span className="dark:text-verylighgray font-normal"></span>
                  </li>
                  <li className="">
                    Languages:
                    <span className="dark:text-verylighgray font-normal"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {countryToDetail?.borders === undefined ? (
            ""
          ) : (
            <div className="w-full flex flex-col gap-5 sm:flex-row">
              <h4 className="text-base dark:text-white font-semibold">
                Border Countries:
              </h4>
              <ul className="flex gap-2 flex-wrap">
                {countryToDetail?.borders.map((border) => (
                  <li
                    className="flex items-center justify-center px-4 dark:bg-darkblue shadow-lg  border dark:border-verydarkblue hover:scale-110 transition-all h-fit w-fit"
                    key={border}
                  >
                    {" "}
                    {border}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </section>
    </main>
  );
};
export default CountryDetails;
