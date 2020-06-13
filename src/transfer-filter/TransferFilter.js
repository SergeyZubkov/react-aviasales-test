import React, {useState} from 'react';
import './TransferFilter.css';

function TransferFilter({onChange}) {

	const handle = (e) => onChange({
    name: e.target.name,
    checked: e.target.checked
  })

	return (
		<div className="transfer-filter box">
          <div className="transfer-filter__title">
            Количество пересадок
          </div>
          <div className="transfer-filter__values">
	          <input 
              id="1"
	          	type="checkbox" 
	          	className="checkbox"
	          	onChange={handle}
	          	name="all"
	          />
            <label htmlFor="1" className="transfer-filter__label checkbox-label">
              Все
            </label>
            <input 
              id="2"
            	type="checkbox" 
            	className="checkbox"
            	onChange={handle}
            	name="0"
            />
            <label htmlFor="2" className="transfer-filter__label checkbox-label">
              Без пересадок
            </label>
            <input 
              id="3"
            	type="checkbox" 
            	className="checkbox"
            	onChange={handle}
            	name="1"
            />
            <label htmlFor="3" className="transfer-filter__label checkbox-label">
              1 пересадка
            </label>
            <input 
              id="4"
            	type="checkbox" 
            	className="checkbox"
            	onChange={handle}
            	name="2"
            />
            <label htmlFor="4" className="transfer-filter__label checkbox-label">
              2 пересадки
            </label>
            <input 
              id="5"
            	type="checkbox" 
            	className="checkbox"
            	onChange={handle}
            	name="3"
            />
            <label htmlFor="5" className="transfer-filter__label checkbox-label">
             3 пересадки
            </label>
          </div>
        </div>
	)
}

export default TransferFilter;