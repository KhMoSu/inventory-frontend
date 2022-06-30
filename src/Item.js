import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
  const { bought, amount } = item;
  return (
    <Link to={'/items/1'}>
      <div className="items">
        <h3>
          Item Name: {item.item} Amount: {amount} Bought: {bought ? 'yes' : 'no'}
        </h3>
        {/* <input type='checkbox'>Bought ${bought}</input> */}
      </div>
    </Link>
  );
}
