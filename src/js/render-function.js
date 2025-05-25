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

export function cratedProducts(products) {
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


export function createProductModal(product) {
  const { title,
    description,
    price,
    thumbnail,
    returnPolicy,
    shippingInformation,
    tags } = product

  const tagsMarkup = tags
    .map(tag => `<li class="modal-product__tag">${tag}</li>`)
    .join('');

  const markup = `<img class="modal-product__img" src="${thumbnail}" alt="${description}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${title}</p>
        <ul class="modal-product__tags">${tagsMarkup}</ul>
        <p class="modal-product__description">${description}</p>
        <p class="modal-product__shipping-information">Shipping:${shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${returnPolicy}</p>
        <p class="modal-product__price">Price:${price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`
  refs.modalProduct.innerHTML = markup;


}