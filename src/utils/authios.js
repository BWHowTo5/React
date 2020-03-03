//This file is for axios with auth

const authios = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://localhost:4000/',
    headers: {
      Authorization: token
    }
  });
};

export default authios;
