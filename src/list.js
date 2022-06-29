import React from 'react';
import { useEffect, useState } from 'react';
import { getAll } from './services/fetch-utils';
import Item from './Item';
export default function List() {
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    async function load(){
      const res = await getAll();
      setItems(res);
    } 
    load();
  }, []);
  return (
    <div className='list-items'>
      {
        items.map((item, i) => (
          <Item key={item.id + i} item={item} />
        )        
        )}
    </div>
  );
}

//on load fetches data and sets in state 

