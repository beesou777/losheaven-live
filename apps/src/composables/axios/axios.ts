import axios from 'axios';

export const useApi = () => {
  const baseURL = 'https://losheaven.vercel.app/api/v1';
  return axios.create({
    baseURL,
  });
};
