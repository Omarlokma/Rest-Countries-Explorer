import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  return (
    <Link to={`/country/${encodeURIComponent(country.name.common)}`} className="country-card">
      <img src={country.flags.svg} alt={country.name.common} />
      <div className="card-body">
        <h2>{country.name.common}</h2>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital}</p>
      </div>
    </Link>
  );
}

export default CountryCard;
