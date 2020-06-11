import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <div className="transfer-filter box">
          Количество пересадок
        </div>
      </div>
      <div className="main">
        <div className="sorting-pannel box">
          <button>Самый дешевый</button>
          <button>Самый быстрый</button>
        </div>
      </div>
    </div>
  );
}

export default App;
