import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  key: '39273189-3f8e43104201480407e7841b8',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const fetchImages = async ({ searchQuery, currentPage = '1' }) => {
  const response = await instance.get({
    params: { q: searchQuery, page: currentPage },
  });
  console.log(response.data);
};
