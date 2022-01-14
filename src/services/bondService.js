import axios from 'axios';

export function fetchBonds(token) {
  return axios.get('https://invest-public-api.tinkoff.ru', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    withCredentials: true,
  });
}
