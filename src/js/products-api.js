// Функції для роботи з бекендом
import axios from 'axios';
import { STORAGE_KEYS } from './constants';

async function getCategories() {
  const response = await axios.get(`${STORAGE_KEYS.productsAPI}/category-list`);
  return response.data;
}

async function getProducts(currentPage) {
  const url = `${STORAGE_KEYS.productsAPI}?limit=${
    STORAGE_KEYS.per_Page
  }&skip=${(currentPage - 1) * 12}`;
  const response = await axios.get(url);
  return response.data;
}

async function getProductsCategory(categorie, currentPage) {
  const url = `${
    STORAGE_KEYS.productsAPI
  }/category/${categorie}?limit=12&skip=${(currentPage - 1) * 12}`;
  const response = await axios.get(url);
  return response.data;
}
async function getProductsId(id) {
  const url = `${STORAGE_KEYS.productsAPI}/${id}`;
  const response = await axios.get(url);
  return response.data;
}

export { getCategories, getProducts, getProductsCategory, getProductsId };
