import React, { useState } from 'react';
import StockChart from './StockChart.jsx';
import MetaInfo from './MetaInfo.jsx';

function SearchBar({ baseUrl, apiKey }) {
  const [query, setQuery] = useState('');
  const [values, setValues] = useState(null);
  const [meta, setMeta] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`${baseUrl}/time_series?symbol=${query}&interval=1day&outputsize=30&apikey=${apiKey}`);
      const apiData = await response.json();

      if (response.status !== 200 || apiData.status !== "ok") {
        throw new Error('API request failed');
      }

      console.log(apiData.values);
      console.log(apiData.meta);
      setValues(apiData.values);
      setMeta(apiData.meta);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="max-w-1280 mx-auto">
        <div className="m-5">
          <form onSubmit={handleSubmit}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 focus:outline-none"
                placeholder="Search Mockups, Logos..."
                value={query}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>

        {meta && <MetaInfo meta={meta} />}

        {values && <StockChart data={values} />}

      </div>
    </>
  );
}

export default SearchBar;
