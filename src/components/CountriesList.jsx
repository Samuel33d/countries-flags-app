import CountryCard from "./CountryCard";

const CountriesList = ({ countries, showCountries }) => {
  return (
    <section className="px-2 py-10 grid grid-cols-[repeat(auto-fit,minmax(301px,1fr))] gap-5 place-items-center ">
      {countries.slice(0, showCountries).map((country) => (
        <CountryCard key={country.cca2} country={country} />
      ))}
    </section>
  );
};
export default CountriesList;
