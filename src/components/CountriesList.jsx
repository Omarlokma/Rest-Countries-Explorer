import CountryCard from "./CountryCard";

function CountriesList({ countries }) {
  return (
    <div className="countries-list">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default CountriesList;
