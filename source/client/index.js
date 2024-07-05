import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';

import './index.scss';

createRoot(document.getElementById('viewer')).render(
  <pre>
    please use the data below,
    <br />
    to build a paired-select using only the built-in browser &lt;select&gt;
    <br />
    refer https://react.dev/reference/react-dom/components/select
    <br />
    {JSON.stringify(
      [
        {
          country: 'india',
          cities: ['delhi', 'mumbai']
        },
        {
          country: 'bangladesh',
          cities: ['dhaka', 'chittagong']
        },
        {
          country: 'srilanka',
          cities: ['colombo', 'jaffna']
        }
      ],
      undefined,
      2
    )}
  </pre>
);
