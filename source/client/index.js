import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';

// eslint-disable-next-line
// @ts-ignore
import finalGif from './media/final.gif';
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
  <div>
    <pre>
      please use the data below,
      <br />
      to build a paired-select using only the built-in browser &lt;select&gt;
      <br />
      refer https://react.dev/reference/react-dom/components/select
      <br />
      {JSON.stringify(data, undefined, 2)}
    </pre>

    <img src={finalGif} alt='' />
  </div>
);
