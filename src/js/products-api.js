// Функції для роботи з бекендом
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export async function getCategory() {
  try {
    const endPoint = '/category-list';
    const res = await axios.get(endPoint);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getProducts(currentPage = 1) {
  const params = {
    limit: 12,
    skip: (currentPage - 1) * 12,
  };
  const res = await axios.get('', { params });
  return res.data;
}

export async function getProductsByCategory(categoryName, currentPage = 1) {
  const params = {
    limit: 12,
    skip: (currentPage - 1) * 12,
  };

  let endPoint = `/category/${categoryName}`;

  if (categoryName === 'ALL') {
    endPoint = '';
  }

  const res = await axios.get(endPoint, { params });

  return res.data;
}

export async function getProductId(id) {
  const res = await axios.get(`/${id}`);
  return res.data;
}

