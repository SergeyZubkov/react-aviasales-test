import React, {useState, useEffect} from 'react';
import './App.css';

import TransferFilter from './transfer-filter/TransferFilter';
import TicketItem from './ticket-item/TicketItem.js';

import dataService from './dataService';

function App() {
  const [sortingProperty, setSortingProperty] = useState('price');
  const [filters, setFilters] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function subscribe() {
      setIsLoading(true);

      let response = await dataService.getData();

      if (response.ok) {
        // Get and show the message
        let data = await response.json();
        if (data.stop) {
          setIsLoading(false);
          return
        }
        setTickets(data.tickets);
        // Call subscribe() again to get the next message
        await subscribe();
      } else {
        // An error - let's show it
        setIsLoading(false);
        setIsError(true);
        // Reconnect in one second
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsError(false);
        await subscribe();
      }
    }

    subscribe();

  },[])

  const handleChangeFilter = (filter) => {
    if (filter.checked) {
      setFilters([...filters, filter.name])
    } else {
      setFilters(filters.filter(f => f !== filter.name));
    }
  }

  const filterOut = (tickets) => {
    if (filters.includes('all')||filters.length === 0) return tickets;
    else if (filters.includes("0")) {
      return tickets.filter(t => t.segments[0].stops.length === 0)
    } else if (filters.includes("1")) {
      return tickets.filter(t => t.segments[0].stops.length === 1)
    } else if (filters.includes("2")) {
      return tickets.filter(t => t.segments[0].stops.length === 2)
    } else if (filters.includes("3")) {
      return tickets.filter(t => t.segments[0].stops.length === 3)
    }
  }
  // list of sorting functions
  const by = {
    price: (a, b) => a.price - b.price,
    duration: (a, b) => {
      const calcDuration = (ticket) => ticket.segments[0].duration;
      return calcDuration(a) - calcDuration(b);
    }
  }

  let content;

  if (isLoading) content = <p> Loading </p>
  else if (isError) content = <p> Error </p>
  else content =(
     <div className="ticket-list">
          {filterOut(tickets)
            .sort(by[sortingProperty])
            .map((ticket, i) => <TicketItem key={i} data={ticket}/>)}
      </div>
  )

  return (
    <div className="app">
      <div className="sidebar">
        <TransferFilter 
          onChange={handleChangeFilter}
        />
      </div>
      <div className="main">
        <div className="sorting-pannel box">
          <div 
            className={`sorting-pannel__btn ${
                sortingProperty == 'price'
                ? 'active'
                : ''
              }
            `}
            onClick={() => setSortingProperty('price')}
          >
            Самый дешевый
          </div>
          <div 
            className={`
              sorting-pannel__btn ${
                sortingProperty === 'duration'
                ? 'active'
                : ''
              }
            `}
            onClick={() => setSortingProperty('duration')}
          >
            Самый быстрый
          </div>
        </div>
        {content} 
      </div>
    </div>
  );
}

export default App;
