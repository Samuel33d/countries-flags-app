import { IconArrowNarrowLeft } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const { id } = useParams();
  const countryToDetail = country[0];
  const languages = [];
  const currencies = [];

  for (const key in countryToDetail?.languages) {
    languages.push(countryToDetail?.languages[key]);
  }

  for (const key in countryToDetail?.currencies) {
    currencies.push(countryToDetail?.currencies[key].name);
  }

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then(({ data }) => setCountry(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main className="p-5 min-h-screen  font-nunito bg-verylighgray dark:bg-verydarkblue  dark:text-white  relative grid place-items-center">
      <Link
        className="absolute top-32 left-3 sm:left-10 flex py-1 px-5 gap-2 dark:bg-darkblue w-fit text-sm items-center shadow-md border dark:border-verydarkblue"
        to={"/"}
      >
        <IconArrowNarrowLeft /> <span>Back</span>
      </Link>

      <section className=" sm:p-2 grid gap-5 my-44 md:grid-cols-2 max-w-[1024px] sm:gap-10 ">
        <header className="h-full w-full">
          <img
            className="w-full rounded-2xl overflow-hidden max-w-[480px] border-2 dark:border-darkblue "
            src={countryToDetail?.flags.svg}
            alt=""
          />
        </header>
        <main className="grid gap-8">
          <div className="grid gap-5">
            <h2 className="font-bold text-lg w-full md:text-2xl transition-all">
              {countryToDetail?.name.common}
            </h2>

            <div className="grid sm:grid-cols-2 sm:gap-10 gap-6 place-items-start">
              <ul className="text-sm grid gap-2 font-bold">
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
                  <span className=" dark:text-verylighgray font-normal">
                    {countryToDetail?.region}
                  </span>
                </li>
                <li>
                  Sub Region:{" "}
                  <span className=" dark:text-verylighgray font-normal">
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
                <ul className="text-sm grid gap-2 font-bold">
                  {countryToDetail?.tld !== undefined && (
                    <li className="">
                      Top Level Domain:{" "}
                      <span className="dark:text-verylighgray font-normal">
                        {countryToDetail?.tld[0]}{" "}
                      </span>
                    </li>
                  )}

                  <li className="">
                    Currencies:{" "}
                    <span className="dark:text-verylighgray font-normal">
                      {currencies.map((currency) => currency).join(", ")}
                    </span>
                  </li>
                  <li className="">
                    Languages:{" "}
                    <span className="dark:text-verylighgray font-normal">
                      {languages.map((language) => language).join(", ")}
                    </span>
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
                  <Link
                    to={`/country/${border}`}
                    key={border}
                    className="w-fit h-fit dark:bg-darkblue py-1 px-3 rounded-md hover:scale-125 transition-all hover:-translate-y-2 hover:shadow-lg border-2 dark:border-darkblue"
                  >
                    {border}
                  </Link>
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
