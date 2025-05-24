import refs from './refs';

export function createCategories(categories) {
  categories.unshift('ALL');
  const markup = categories
    .map(
      category => `<li class="categories__item">
   <button class="categories__btn" type="button">
   ${category}</button>
 </li>
`
    )
    .join('');

  refs.categories.innerHTML = markup;
}
