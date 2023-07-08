import axios from 'axios';
import { PANDA_API_KEY } from '@env';

export const fetcher = (url: string) => {
  const auth = 'Bearer ' + PANDA_API_KEY;
  return axios
    .get(url, { headers: { Authorization: auth } })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
