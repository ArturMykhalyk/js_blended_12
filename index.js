import"./assets/styles-C1jZxY8C.js";import{a as c}from"./assets/vendor-C19taMLP.js";const r={categories:document.querySelector(".categories"),products:document.querySelector(".products"),loadMoreButton:document.querySelector(".moreButton"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),closeModalBtn:document.querySelector(".modal__close-btn"),searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-form__input"),searchClear:document.querySelector(".search-form__btn-clear"),btnAddCartModal:document.querySelector(".modal-product__btn--cart"),btnAddWishlistModal:document.querySelector(".modal-product__btn--wishlist"),navCountCart:document.querySelector("[data-cart-count]"),navCountWishlist:document.querySelector("[data-wishlist-count]"),itemsCart:document.querySelector("[data-count]"),totalCart:document.querySelector("[data-price]"),buyProductsBtn:document.querySelector(".cart-summary__btn"),scrollUpBtn:document.getElementById("scrollUpBtn"),toggleTheme:document.querySelector('[type="checkbox"]')};c.defaults.baseURL="https://dummyjson.com/products";async function i(){return(await c.get("/category-list")).data}async function m(t=1){const e={limit:12,skip:(t-1)*12},o=await c.get("",{params:e});return console.log(o.data),o.data}function p(t){t.unshift("ALL");const e=t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">
   ${o}</button>
 </li>
`).join("");r.categories.innerHTML=e}function y(t){const e=t.map(({id:o,title:a,description:s,brand:n,thumbnail:u,category:d,price:l})=>`<li class="products__item" data-id="${o}">
    <img class="products__image" src="${u}" alt="${s}"/>
    <p class="products__title">${a}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${n}</span></p>
    <p class="products__category">Category:${d} </p>
    <p class="products__price">Price:${l} $</p>
 </li>`).join("");r.products.insertAdjacentHTML("beforeend",e)}async function _(){const t=await i(),e=await m();p(t),y(e.products)}_();
//# sourceMappingURL=index.js.map
