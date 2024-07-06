import React, { useState } from 'react';
import './App.css'; // You can define your styles in App.css

function App() {
  const data = [
    {
      country: 'India',
      cities: [
        { name: 'Delhi', description: 'Capital of India' },
        { name: 'Mumbai', description: 'Financial capital of India' }
      ]
    },
    {
      country: 'Bangladesh',
      cities: [
        { name: 'Dhaka', description: 'Capital of Bangladesh' },
        { name: 'Chittagong', description: 'Financial capital of Bangladesh' }
      ]
    },
    {
      country: 'Sri Lanka',
      cities: [
        { name: 'Colombo', description: 'Capital of Sri Lanka' },
        { name: 'Jaffna', description: 'Financial capital of Sri Lanka' }
      ]
    }
  ];

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cityDescription, setCityDescription] = useState('');

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setSelectedCity('');
    setCityDescription('');
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);

    // Find city description from data
    const countryData = data.find(country => country.country === selectedCountry);
    const cityData = countryData.cities.find(c => c.name === city);
    if (cityData) {
      setCityDescription(cityData.description);
    } else {
      setCityDescription('');
    }
  };

  return (
    <div className="App">
      <h2>Select a country / city</h2>

      {/* Country Select */}
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {data.map((country, index) => (
          <option key={index} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>

      {/* City Select (Only shown when a country is selected) */}
      {selectedCountry && (
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {data
            .find(country => country.country === selectedCountry)
            .cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
        </select>
      )}

      {/* City Description (Only shown when a city is selected) */}
      {selectedCity && (
        <div className="city-description">
          <h3>City Description:</h3>
          <p>{cityDescription}</p>
        </div>
      )}
    </div>
  );
}

export default App;
