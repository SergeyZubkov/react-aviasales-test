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
            <label className="transfer-filter__label checkbox-label">
	          <input 
	          	type="checkbox" 
	          	className="checkbox"
	          	onChange={handle}
	          	name="all"
	          />
	          <span></span>
              Все
            </label>
            <label className="transfer-filter__label checkbox-label">
              <input 
              	type="checkbox" 
              	className="checkbox"
              	onChange={handle}
              	name="0"
              />
              <span></span>
              Без пересадок
            </label>
            <label className="transfer-filter__label checkbox-label">
              <input 
              	type="checkbox" 
              	className="checkbox"
              	onChange={handle}
              	name="1"
              />
               <span></span>
              1 пересадка
            </label>
            <label className="transfer-filter__label checkbox-label">
              <input 
              	type="checkbox" 
              	className="checkbox"
              	onChange={handle}
              	name="2"
              />
               <span></span>
              2 пересадки
            </label>
            <label className="transfer-filter__label checkbox-label">
              <input 
              	type="checkbox" 
              	className="checkbox"
              	onChange={handle}
              	name="3"
              />
               <span></span>
              3 пересадки
            </label>
          </div>
        </div>
	)
}

export default TransferFilter;