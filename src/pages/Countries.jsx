import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CountriesList from "../components/CountriesList";
const CountriesMain = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");

  const formRef = useRef();

  countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

  const countryByName = countries?.filter((country) =>
    country.name.common.toLowerCase().includes(countryName)
  );

  const handleInput = (e) => {
    setCountryName(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  const handleRegions = () => {
    const region = formRef.current.value;

    axios
      .get(`https://restcountries.com/v3.1/${region}`)
      .then(({ data }) => setCountries(data))
      .catch((err) => console.log(err));
  };

  return (
    <main className="py-20  md:px-10 font-nunito  mx-auto dark:text-white min-h-screen dark:bg-verydarkblue transition-all">
      <section className="pt-5 px-2 bg-verylighgray dark:bg-verydarkblue transition-all">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative flex flex-col gap-10 md:grid sm:grid-cols-[60%,auto] sm:justify-between sm:my-10 transition-all sm:gap-5 md:px-4  "
        >
          <div className="relative">
            <button
              className="absolute sm:left-5 md:bottom-[1.2rem] bottom-3 left-4 dark:text-white text-black"
              type="submit"
            >
              <IconSearch size={20} />
            </button>
            <input
              value={countryName}
              onClick={() => setCountryName("")}
              onChange={handleInput}
              autoComplete="off"
              name="countryName"
              type="text"
              className="outline-none flex-1 font-semibold bg-transparent sm:w-[50%] w-[60%] pr-5 py-3 dark:bg-darkblue  dark:border-verydarkblue sm:text-[18px] shadow-lg  rounded-md overflow-hidden px-12 focus:w-full transition-all border text-sm"
              placeholder="Search for a country"
            />
          </div>

          <div className="w-[200px] h-fit shadow-md rounded-md px-5 py-3 border  flex  transition-all dark:bg-darkblue dark:border-verydarkblue ">
            <select
              ref={formRef}
              onChange={handleRegions}
              className="w-auto outline-none flex-1 font-semibold bg-transparent dark:bg-darkblue dark:border-verydarkblue transition-all text-sm sm:text-[18px] dark:text-white  text-black"
            >
              <option value="/all" className="">
                All regions
              </option>
              <option value="region/africa" className="">
                Africa
              </option>
              <option value="region/america" className="">
                America
              </option>
              <option value="region/asia" className="">
                Asia
              </option>
              <option value="region/europe" className="">
                Europe
              </option>
              <option value="region/oceania" className="">
                Oceania
              </option>
            </select>
          </div>
        </form>
        {
          <CountriesList
            countries={countryByName !== "" ? countryByName : countries}
          />
        }
      </section>
    </main>
  );
};
export default CountriesMain;
