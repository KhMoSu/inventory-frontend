// import { client, checkError } from './client';

export async function getAll() {

  const res = await fetch('http://localhost/7890/api/v1/items');
  const items = await res.json();

  return items;
}

//post and put more complex 