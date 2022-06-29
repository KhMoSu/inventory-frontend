import { createClient } from '@localhost:5432/postgres';
export const client = createClient(
  process.env.API_URL,
  process.env.SALT_ROUNDS,
  process.env.COOKIE_NAME,
  process.env.JWT_SECRET,
  process.env.SECURE_COOKIES
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
