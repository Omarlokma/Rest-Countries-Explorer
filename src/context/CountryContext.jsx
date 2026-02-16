import { createContext, useState, useCallback } from "react";

export const CountryContext = createContext();

export function CountryProvider({ children }) {
  const [countries, setCountries] = useState([]);

  const fetchCountries = useCallback(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,region,capital,population,flags,cca3")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <CountryContext.Provider value={{ countries, fetchCountries }}>
      {children}
    </CountryContext.Provider>
  );
}
