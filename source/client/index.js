import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';

import finalGif from './media/final.gif';
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
