import refs from './refs';
import { getProductsByCategory } from './products-api.js';
import { cratedProducts } from './render-function.js';

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
