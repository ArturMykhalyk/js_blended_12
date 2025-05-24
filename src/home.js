import refs from './js/refs';
import { getCategory } from './js/products-api';
import { createCategories } from './js/render-function';

const categories = await getCategory();

createCategories(categories);
