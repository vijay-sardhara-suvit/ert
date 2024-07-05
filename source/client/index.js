import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';

import './index.scss';

const data = [
  {
    country: 'india',
    cities: [
      { name: 'delhi', description: 'capital of india' },
      { name: 'mumbai', description: 'financial capital of india' }
    ]
  },
  {
    country: 'bangladesh',
    cities: [
      { name: 'dhaka', description: 'capital of bangladesh' },
      { name: 'chittagong', description: 'financial capital of bangladesh' }
    ]
  },
  {
    country: 'srilanka',
    cities: [
      { name: 'colombo', description: 'capital of srilanka' },
      { name: 'jaffna', description: 'financial capital of srilanka' }
    ]
  }
];

const Component = () => {
  const [country, setCountry] = useState('');

  const [city, setCity] = useState('');

  const [submit, setSubmit] = useState(false);

  return (
    <div className='__Component'>
      <div className='_Component'>
        <div className='Component'>
          <select
            className='form-select'
            value={country}
            onChange={(event) => {
              setCountry(event.target.value);

              setCity('');

              setSubmit(false);
            }}
          >
            {[{ country: 'Select a country...' }, ...data].map(
              ({ country }, index) => {
                return (
                  <option key={index} value={index ? country : ''}>
                    {country}
                  </option>
                );
              }
            )}
          </select>

          {country && (
            <select
              className='form-select'
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            >
              {[
                { name: 'Select a city...' },
                ...data.find(({ country: _country }) => _country === country)
                  .cities
              ].map(({ name }, index) => {
                return (
                  <option key={index} value={index ? name : ''}>
                    {name}
                  </option>
                );
              })}
            </select>
          )}

          {city && (
            <button
              className='btn btn-link btn-sm'
              onClick={() => setSubmit(true)}
            >
              Submit
            </button>
          )}

          {submit && city && (
            <div className='description'>
              {
                data
                  .find(({ country: _country }) => _country === country)
                  .cities.find(({ name }) => name === city).description
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById('viewer')).render(<Component />);
