import axios from 'axios';

export function fetchBonds(token) {
  return axios.get('https://random-data-api.com/api/stripe/random_stripe');
}
