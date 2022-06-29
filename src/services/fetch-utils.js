import { client, checkError } from './client';

export async function getAll() {
  return client.auth.session();
}