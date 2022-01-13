import axios from 'axios';

export function fetchToken() {
  return axios.get('https://random-data-api.com/api/stripe/random_stripe');
}
