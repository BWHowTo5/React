import axios from 'axios';

const authios = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://how-to-5-api.herokuapp.com/api/',
    headers: {
      Authorization: token
    }
  });
};

export default authios;
