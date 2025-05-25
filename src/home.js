import refs from './js/refs';
import { getCategory, getProducts } from './js/products-api';
import { createCategories, cratedProducts } from './js/render-function';
import { handlersCategoryClick } from './js/handlers.js';
async function initMainPage() {
  const categories = await getCategory();

  const products = await getProducts();

  if (!categories) {
    refs.categories.innerHTML = 'not found';
  } else {
    createCategories(categories);
  }

  cratedProducts(products.products);
}

initMainPage();

refs.categories.addEventListener('click', handlersCategoryClick);
