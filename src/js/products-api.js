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
  return res.data;
}

export async function getProductsByCategory(categoryName, currentPage = 1) {
  const params = {
    limit: 12,
    skip: (currentPage - 1)*12,
  }
  const endPoint = `/category/${categoryName}`;  
  const res = await axios.get(endPoint, { params });
  console.log(res.data);
  console.log(categoryName);
  return res.data;
}


// ttps://dummyjson.com/products/category/smartphones 