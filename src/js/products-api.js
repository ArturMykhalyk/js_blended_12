// Функції для роботи з бекендом
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export async function getCategory() {
  const endPoint = '/category-list';
  const res = await axios.get(endPoint);
  return res.data;
}

export async function getProducts(currentPage = 1) {
  const params = {
    limit: 12,
    skip: (currentPage - 1)*12,
  }
  const res = await axios.get('', { params });
  console.log(res.data);
  return res.data;
}
// https://dummyjson.com/products?limit=10&skip=10 