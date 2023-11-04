import { IconArrowUp, IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CountriesList from "../components/CountriesList";
const CountriesMain = () => {
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState(20);
  const [countryName, setCountryName] = useState("");
  const formRef = useRef();

  const countryByName = countries?.filter((country) =>
    country.name.common.toLowerCase().includes(countryName)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const countryName = e.target.countryName.value;
    setCountryName(countryName.toLowerCase());
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

  const handleLoadCountries = () => {
    if (showCountries === 270) {
      return alert("This is the end!");
    } else {
      setShowCountries(showCountries + 25);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <main className="py-20 font-nunito  mx-auto dark:text-white min-h-screen dark:bg-verydarkblue transition-all">
        <section className="pt-5 px-2 bg-verylighgray dark:bg-verydarkblue transition-all">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-10 md:grid sm:grid-cols-[60%,auto] sm:justify-between sm:my-10 transition-all sm:gap-5 md:px-4  "
          >
            <div
              className="flex gap-3 shadow-lg rounded-md py-3 px-5 text-sm border sm:text-[18px] transition-all 
            dark:bg-darkblue dark:border-verydarkblue"
            >
              <button type="submit">
                <IconSearch
                  size={20}
                  className="text-darkgray dark:text-white transition-all"
                />
              </button>
              <input
                name="countryName"
                type="text"
                className="outline-none flex-1 font-semibold bg-transparent"
                placeholder="Search for a country"
              />
            </div>
            <div className="w-[200px] h-fit shadow-md rounded-md px-5 py-3 border text-sm flex sm:text-[18px] transition-all dark:bg-darkblue dark:border-verydarkblue ">
              <select
                ref={formRef}
                onChange={handleRegions}
                className="w-auto outline-none flex-1 font-semibold bg-transparent dark:bg-darkblue dark:border-verydarkblue transition-all"
              >
                <option defaultChecked disabled>
                  Filter by Region
                </option>
                <option value="/all">All</option>
                <option value="region/africa">Africa</option>
                <option value="region/america">America</option>
                <option value="region/asia">Asia</option>
                <option value="region/europe">Europe</option>
                <option value="region/oceania">Oceania</option>
              </select>
            </div>
          </form>
          {
            <CountriesList
              showCountries={showCountries}
              countries={countryByName !== "" ? countryByName : countries}
            />
          }

          <div className="w-full flex justify-center gap-5">
            <button
              onClick={handleLoadCountries}
              className=" px-5 py-1 text-lg border shadow-md dark:bg-darkblue dark:border-verydarkblue"
            >
              More...
            </button>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-2 px-5 py-1 text-lg border shadow-md dark:bg-darkblue dark:border-verydarkblue"
            >
              Up to start <IconArrowUp />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
export default CountriesMain;
