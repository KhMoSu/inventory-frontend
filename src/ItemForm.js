import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateById, getById } from './services/fetch-utils';

import React from 'react';

export default function ItemForm() {
  const { id } = useParams();
  const [itemForm, setItemForm] = useState({
    item: '',
    amount: '',
    bought: false,
  });

  useEffect(() => {
    async function load() {
      const res = await getById(id);
      setItemForm(res);
    }
    load();
  }, [id]);

  return <h1>{itemForm.item}</h1>;
}
