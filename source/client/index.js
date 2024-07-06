import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';

// eslint-disable-next-line
// @ts-ignore
import finalGif from './final.gif';
import './index.scss';

const data = [
  {
    country: 'India',
    cities: [
      { name: 'Delhi', description: 'Capital of india' },
      { name: 'Mumbai', description: 'Financial capital of india' }
    ]
  },
  {
    country: 'Bangladesh',
    cities: [
      { name: 'Dhaka', description: 'Capital of bangladesh' },
      { name: 'Chittagong', description: 'Financial capital of bangladesh' }
    ]
  },
  {
    country: 'Sri-lanka',
    cities: [
      { name: 'Colombo', description: 'Capital of srilanka' },
      { name: 'Jaffna', description: 'Financial capital of srilanka' }
    ]
  }
];

createRoot(document.getElementById('viewer')).render(
  <div className='m-3'>
    please use the data at the bottom,
    <br />
    to build a paired-select using only the built-in browser &lt;select&gt;
    <br />
    <div className='text-muted'>
      refer https://react.dev/reference/react-dom/components/select
    </div>
    conditions:
    <ul>
      <li>select should have placeholders (Select a country / city)</li>

      <li>city-select should be displayed only when a country is selected</li>

      <li>submit should be displayed only when a city is selected</li>

      <li>on submit the city description should be displayed</li>

      <li>the components should be centered to the page</li>
    </ul>
    <img width='100%' src={finalGif} alt='' />
    <pre>{JSON.stringify(data, undefined, 2)}</pre>
  </div>
);
