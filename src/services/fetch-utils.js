// import { client, checkError } from './client';

import { put } from 'superagent';

export async function getAll() {
  const res = await fetch('http://localhost:7890/api/v1/items');
  const items = await res.json();
  console.log(items);

  return items;
}

export async function getById(id) {
  const res = await fetch(`http://localhost:7890/api/v1/items/${id}`);
  const item = await res.json();

  return item;
}

export async function updateById(id) {
  const res = await put(`http://localhost:7890/api/v1/items/${id}`);
  const item = await res.json();

  return item;
}

//post and put more complex
