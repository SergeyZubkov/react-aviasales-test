import React from 'react';
import "./TicketItem.css";

function TicketItem({data}) {
	const {
		price,
		carrier,
		segments: [thither, back]
	} = data;

	const minutesToHours = (min) => Math.round(min / 60)

	return (
		<div className="ticket-item box">
        <div className="ticket-item__price">
        	{price}
        </div>
        <div className="ticket-item__company-logo">
        	{carrier}
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	{`${thither.origin} - ${thither.destination}`}
          </div>
          <div className="info-block__value">
          	{thither.date}
          </div>
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	В пути
          </div>
          <div className="info-block__value">
          	{minutesToHours(thither.duration)}ч
          </div>
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	{thither.stops.length}
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
          	{back.date}
          </div>
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	В пути
          </div>
          <div className="info-block__value">
          	{minutesToHours(back.duration)}ч
          </div>
        </div>
        <div className="ticket-item__info-block">
          <div className="info-block__label">
          	{back.stops.length}
          </div>
          <div className="info-block__value">
          	{back.stops.join(", ")}
          </div>
        </div>
      </div>
	)
}

export default TicketItem;