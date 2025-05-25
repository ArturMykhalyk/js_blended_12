import refs from './refs';
import { getProductsByCategory, getProductId, searchUserProducts } from './products-api.js';
import { cratedProducts, createProductModal } from './render-function.js';
import { openModal } from './modal';

export async function handlersCategoryClick(e) {
  if (!e.target.classList.contains('categories__btn')) return;

  const userCategory = e.target.textContent;

  const productsByCategory = await getProductsByCategory(userCategory);
  refs.products.innerHTML = '';
  console.log(productsByCategory);

  if (productsByCategory.total === 0) {
    refs.notFound.classList.add('not-found--visible');
  } else {
    refs.notFound.classList.remove('not-found--visible');
    cratedProducts(productsByCategory.products);
  }

  //aktiv
  refs.categories.querySelectorAll('.categories__btn').forEach(element => {
    element.classList.remove('categories__btn--active');
  });
  e.target.classList.add('categories__btn--active');
}

export async function handlersProductClick(e) {

  const productItem = e.target.closest('.products__item');
  if (!productItem) return;

  const productId = productItem.dataset.id
  openModal();

  const product = await getProductId(productId);
  console.log(product);
  createProductModal(product)
}

export async function searchForm(e) {
    e.preventDefault();
    const searchName = refs.searchInput.value.trim();

    if (searchName === '') return;

    const searchProduct = await searchUserProducts(searchName);
    refs.products.innerHTML = '';

    if (searchProduct.total === 0) {
        refs.notFound.classList.add('not-found--visible');
    } else {
        refs.notFound.classList.remove('not-found--visible');
       
        cratedProducts(searchProduct.products);
    }

    refs.searchForm.reset();
}