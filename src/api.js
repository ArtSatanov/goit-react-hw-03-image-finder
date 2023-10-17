import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  key: '39273189-3f8e43104201480407e7841b8',
});

export const fetchImages = async () => {
  const respons = await instance('');
};
