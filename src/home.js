//Логіка сторінки Home
import { getCategories, getProducts } from './js/products-api';
import {
  createCategories,
  createProducts,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-function';
import {
  handleCategoryClick,
  handleProductClick,
  handleMoreBtnClick,
} from './js/handlers';
import { STORAGE_KEYS } from './js/constants';
import { refs } from './js/refs';
showLoader();
getCategories()
  .then(categories => {
    createCategories(categories);
  })
  .catch(error => console.log('categories', error));

getProducts(STORAGE_KEYS.page)
  .then(products => {
    hideLoader();
    createProducts(products.products);
    STORAGE_KEYS.totalPage = products.total / STORAGE_KEYS.per_Page;
    if (STORAGE_KEYS.totalPage > 1) {
      showLoadMoreButton();
      STORAGE_KEYS.page++;
    }
  })
  .catch(error => console.log('categories', error));

refs.categories.addEventListener('click', handleCategoryClick);
refs.products.addEventListener('click', handleProductClick);
refs.loadMoreButton.addEventListener('click', handleMoreBtnClick);
