  please use the data at the bottom,
  to build a paired-select using only the built-in browser &lt;select&gt;
  refer https://react.dev/reference/react-dom/components/select
  conditions:
    - select should have placeholders (Select a country / city)

    - city-select should be displayed only when a country is selected

    - submit should be displayed only when a city is selected

    - on submit the city description should be displayed

    - the components should be centered to the page

  ![final](https://github.com/shivapand/ert/assets/132883658/13654024-98a9-4f5b-a666-032679f925ae)

  <pre>
    [
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
    ]
  </pre>
