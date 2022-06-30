import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
  const { id, bought, amount } = item;
  return (
    <Link to={`/items/${id}`}>
      <div className="items">
        <h3> Items </h3>
        <p>Item Name: {item.item} </p>
        <p>Amount: {amount} </p>
        <p>Bought: {bought ? 'yes' : 'no'}</p>
      </div>
    </Link>
  );
}
