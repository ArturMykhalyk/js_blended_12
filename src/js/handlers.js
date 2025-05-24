import refs from './refs';
import { getProductsByCategory } from './products-api.js';
import { cratedProducts } from './render-function.js';

export async function handlersCategoryClick(e) {
    if (!e.target.classList.contains('categories__btn')) return;

    const userCategory = e.target.textContent;
    console.log(userCategory);

    const productsByCategory = await getProductsByCategory(userCategory);
    refs.products.innerHTML = '';
    cratedProducts(productsByCategory.products); 
    
    refs.categories.querySelectorAll('.categories__btn').forEach(element => {
        element.classList.remove('categories__btn--active');
    });
    
    e.target.classList.add('categories__btn--active');    

}


