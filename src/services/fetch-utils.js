


export async function getAll() {
  const res = await fetch('http://localhost:7890/api/v1/items');
  const items = await res.json();

  return items;
}

export async function getById(id) {
  const res = await fetch(`http://localhost:7890/api/v1/items/${id}`);
  const item = await res.json();

  return item;
}

export async function updateById(id, item) {
  const res = await fetch(`http://localhost:7890/api/v1/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(item)
  });
  return res.json();
}

//post and put more complex
