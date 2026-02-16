import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CountryContext } from '../context/CountryContext';

function CountryDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(name);

  const { countries, fetchCountries } = useContext(CountryContext);

  useEffect(() => {
    if (countries.length === 0) fetchCountries();
  }, [countries, fetchCountries]);

  const country = countries.find(c => c.name.common === decodedName);
  if (!country) return <p>Loading country details...</p>;

  return (
<div className="country-detail">
  <button onClick={() => navigate(-1)} className="back-button">← Back</button>
  <div className="details-grid">
    <img src={country.flags.svg} alt={country.name.common} />
    <div className="details-info">
      <h2>{country.name.common}</h2>
      <div className="country-info">
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital?.join(', ')}</p>
      </div>
    </div>
  </div>
</div>

  );
}

export default CountryDetails;
