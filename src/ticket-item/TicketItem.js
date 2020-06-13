import React from 'react';
import "./TicketItem.css";

function TicketItem({data}) {
	const {
		price,
		carrier,
		segments: [thither, back]
	} = data;

	const declension = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

	const getFormattedStringStops = (stopsNum) => stopsNum + ' ' + declension(stopsNum, ["пересадка", "пересадки", "пересадок"])

	const getTimeInterval = (date, duration) => `${getHoursMins(date)} - ${getHoursMins(new Date(new Date(date).getTime() + duration * 60 * 100))}`

	const getHoursMins = date => new Date(date).toLocaleTimeString().slice(0, 5)

	const minutesToHoursAndMins = mins => {
		const hours = Math.floor(mins / 60);
		const remainMins = mins - hours * 60;

		return `${hours}ч ${remainMins}м`
	}

	console.count()

	return (
		<div className="ticket-item box">
        <div className="ticket-item__price">
        	{price} P
        </div>
        <div className="ticket-item__carrier">
        	<img src={`//pics.avs.io/99/36/${carrier}.png`} 
        		alt="" 
        		className="ticket-item__carrier-logo"
        	/>
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	{`${thither.origin} - ${thither.destination}`}
          </div>
          <div className="info-block__value">
          	{getTimeInterval(thither.date, thither.duration)}
          </div>
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	В пути
          </div>
          <div className="info-block__value">
          	{minutesToHoursAndMins(thither.duration)}
          </div>
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	{getFormattedStringStops(thither.stops.length)}
          </div>
          <div className="info-block__value">
          	{thither.stops.join(", ")}
          </div>
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	{`${back.origin} - ${back.destination}`}
          </div>
          <div className="info-block__value">
          	{getTimeInterval(back.date, back.duration)}
          </div>
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	В пути
          </div>
          <div className="info-block__value">
          	{minutesToHoursAndMins(back.duration)}
          </div>
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	{getFormattedStringStops(back.stops.length)}
          </div>
          <div className="info-block__value">
          	{back.stops.join(", ")}
          </div>
        </div>
      </div>
	)
}

export default TicketItem;