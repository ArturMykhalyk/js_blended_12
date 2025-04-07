// Функції, які передаються колбеками в addEventListners
import iziToast from 'izitoast';

// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { STORAGE_KEYS } from './constants';
import {
  getProducts,
  getProductsCategory,
  getProductsId,
} from './products-api';
import {
  createProducts,
  clearProducts,
  showNotFound,
  hideNotFound,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  createProductModal,
} from './render-function';
import { openModal } from './modal';
async function handleCategoryClick(event) {
  //перевірка чи клік саме по кнопці
  if (!event.target.classList.contains('categories__btn')) return;
  // прибрати всі активні кнопки
  const buttons = document.querySelectorAll('.categories__btn');
  buttons.forEach(btn => btn.classList.remove('categories__btn--active'));

  STORAGE_KEYS.category = event.target.textContent;
  STORAGE_KEYS.page = 1;

  hideNotFound();

  hideLoadMoreButton();

  try {
    let products;
    if (STORAGE_KEYS.category === 'All') {
      products = await getProducts(STORAGE_KEYS.page);
    } else {
      products = await getProductsCategory(
        STORAGE_KEYS.category,
        STORAGE_KEYS.page
      );
    }

    if (products.products.length === 0) {
      clearProducts();
      showNotFound();
      hideLoadMoreButton();
      return;
    }

    STORAGE_KEYS.totalPage = products.total / STORAGE_KEYS.per_Page;
    if (STORAGE_KEYS.totalPage > 1) {
      showLoadMoreButton();
      STORAGE_KEYS.page++;
    }

    clearProducts();

    createProducts(products.products);
    event.target.classList.toggle('categories__btn--active');
  } catch (error) {
    console.log(error);
  }
}

async function handleMoreBtnClick(event) {
  showLoader();
  try {
    let products;
    if (STORAGE_KEYS.category === 'All') {
      products = await getProducts(STORAGE_KEYS.page);
    } else {
      products = await getProductsCategory(
        STORAGE_KEYS.category,
        STORAGE_KEYS.page
      );
    }
    hideLoader();
    createProducts(products.products);

    if (STORAGE_KEYS.totalPage <= STORAGE_KEYS.page) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results",
        position: 'topRight',
      });
    }
    STORAGE_KEYS.page++;
  } catch (error) {
    console.error('Error click button :', error);
  }
}

async function handleProductClick(event) {
  const productItem = event.target.closest('.products__item');
  if (!productItem) return;
  const id = productItem.dataset.id;
  openModal();
  const product = await getProductsId(id);
  console.log(product);
  createProductModal(product);
}

export { handleCategoryClick, handleProductClick, handleMoreBtnClick };
