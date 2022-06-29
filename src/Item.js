import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
  const { id, bought, amount } = item;
  return (
    <Link to={`/api/v1/items/${id}`}>
      <div className='items'>
        <h3>Item Name: {item} Amount: {amount} Bought: {bought}</h3>
        {/* <input type='checkbox'>Bought ${bought}</input> */}
      </div>
    </Link>
  );
}

