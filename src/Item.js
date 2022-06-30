import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
  const { bought, amount } = item;
  return (
    // <Link to={'/items/1'}>
    <div className="items">
      <h3> Items </h3>
      <p>Item Name: {item.item} </p>
      <p>Amount: {amount} </p>
      <p>Bought: {bought ? 'yes' : 'no'}</p>
      {/* <input type='checkbox'>Bought ${bought}</input> */}
    </div>
    // </Link>
  );
}
