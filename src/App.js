import React, {useState, useEffect} from 'react';
import './App.css';

import TransferFilter from './transfer-filter/TransferFilter';
import TicketItem from './ticket-item/TicketItem.js';

import dataService from './dataService';

function App() {
  const [sortBy, setSortBy] = useState('time');
  const [filters, setFilters] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    dataService.getData()
    .then(data => setTickets(data))
  },[])

  const handleChangeFilter = (filter) => {
    if (filter.checked) {
      setFilters([...filters, filter.name])
    } else {
      setFilters(filters.filter(f => f !== filter.name));
    }
  }

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
                sortBy == 'price'
                ? 'active'
                : ''
              }
            `}
            onClick={() => setSortBy('price')}
          >
            Самый дешевый
          </div>
          <div 
            className={`
              sorting-pannel__btn ${
                sortBy === 'time'
                ? 'active'
                : ''
              }
            `}
            onClick={() => setSortBy('time')}
          >
            Самый быстрый
          </div>
        </div>
        <div className="ticket-list">
          {tickets.map((ticket, i) => <TicketItem key={i} data={ticket}/>)}
        </div> 
      </div>
    </div>
  );
}

export default App;
