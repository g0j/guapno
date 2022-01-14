import axios from 'axios';

export function fetchBonds(token) {
  return axios.get('https://api-invest.tinkoff.ru/openapi/market/bonds', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
}
