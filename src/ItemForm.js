import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateById, getById } from './services/fetch-utils';

import React from 'react';

export default function ItemForm() {
  const { id } = useParams();
  const [itemForm, setItemForm] = useState({
    item: '',
    amount: 0,
    bought: false,
  });
  async function handleSubmit(e){
    e.preventDefault();
    await updateById(id, itemForm);
  }
  async function handleBought(e) {
    e.preventDefault();
    if (itemForm.bought === false){
      setItemForm.bought(true);
    } else {
      setItemForm.bought(false);
    }
    await handleSubmit();
  }
  useEffect(() => {
    async function load() {
      const res = await getById(id);
      setItemForm(res);
    }
    load();
  }, [id]);

  return (
    <div className='item-form'>
      <h1>{itemForm.item}</h1>
      <form onSubmit={handleSubmit}>
        <label>
        Amount
          <input 
            value={itemForm.amount} onChange={(e) => 
              setItemForm({ 
                ...itemForm, 
                amount: e.target.value })}/>
          <button>Update amount</button>
        </label>
      
        <input type="checkbox" value={itemForm.bought} onChange={(e) => 
          setItemForm({ 
            ...itemForm, 
            bought: !itemForm.bought })}/>
        {/* <button onClick={handleBought}> Purchased </button> */}

      </form>
    </div>
  );
}
