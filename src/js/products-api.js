// Функції для роботи з бекендом
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export async function getCategory() {
  const endPoint = '/category-list';
  const res = await axios.get(endPoint);
  return res.data;
}
