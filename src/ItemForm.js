import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateById, getById, deleteItem } from './services/fetch-utils';

import React from 'react';

export default function ItemForm() {
  const { id } = useParams();
  const [itemForm, setItemForm] = useState({
    item: '',
    amount: 0,
    bought: false,
  });
  async function handleDelete(){
    await deleteItem(id);
  }
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
                ...itemForm, 
                amount: e.target.value })}/>
          <button>Update amount</button>
        </label>
      
        <input type="checkbox" value={itemForm.bought} onChange={() => 
          setItemForm({ 
            ...itemForm, 
            bought: !itemForm.bought })}/>
      </form>
      <button onClick={handleDelete} >❌</button>
    </div>
  );
}
