import { API } from '../config';

export const fetchBaiduHot = () => {
  return fetch(`${API}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
