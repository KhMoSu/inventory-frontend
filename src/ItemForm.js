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
                ...ItemForm, 
                amount: e.target.value })}/>
          <button> Update! </button>
        </label>
      </form>
    </div>
  );
}
