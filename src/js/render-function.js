import refs from './refs';

export function createCategories(categories) {
  categories.unshift('ALL');
  const markup = categories
    .map(
      category => `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>
`
    )
    .join('');

  refs.categories.innerHTML = markup;
}

export function cratedProducts(products){
const markup = products.map(({ id, title, description, 
brand, thumbnail, category, price }) =>
`<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${description}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${brand}</span></p>
    <p class="products__category">Category:${category} </p>
    <p class="products__price">Price:${price} $</p>
 </li>`
).join('');
refs.products.insertAdjacentHTML('beforeend', markup);
};


