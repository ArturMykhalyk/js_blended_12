import"./assets/styles-C8Ic-ukx.js";import{a as r,S as k,N as S,P as M,A as E,Z as A,i as q}from"./assets/vendor-7AWWK4ZU.js";const e={productsAPI:"https://dummyjson.com/products",page:1,per_Page:12,totalPage:0,category:"All"};async function B(){return(await r.get(`${e.productsAPI}/category-list`)).data}async function g(t){const o=`${e.productsAPI}?limit=${e.per_Page}&skip=${(t-1)*12}`;return(await r.get(o)).data}async function v(t,o){const s=`${e.productsAPI}/category/${t}?limit=12&skip=${(o-1)*12}`;return(await r.get(s)).data}async function C(t){const o=`${e.productsAPI}/${t}`;return(await r.get(o)).data}const a={categories:document.querySelector(".categories"),products:document.querySelector(".products"),loadMoreButton:document.querySelector(".moreButton"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),closeModalBtn:document.querySelector(".modal__close-btn")};function j(t){t.unshift("All");const o=t.map(s=>`<li class="categories__item">
          <button class="categories__btn" type="button">${s}</button>
        </li>`).join("");a.categories.insertAdjacentHTML("beforeend",o)}function m(t){const o=t.map(({id:s,title:c,brand:n,category:i,description:d,price:l,images:y})=>`
      <li class="products__item" data-id="${s}">
        <img class="products__image"  src="${y[0]}" alt="${d}" />
        <p class="products__title">${c}</p>
        <p class="products__brand">
          <span class="products__brand--bold">Brand:${n}</span>
        </p>
        <p class="products__category">Category: ${i}</p>
        <p class="products__price">Price: ${l}$</p>
      </li>`).join("");a.products.insertAdjacentHTML("beforeend",o)}function I({title:t,description:o,price:s,images:c,returnPolicy:n,shippingInformation:i,tags:d}){const l=d.map(u=>`<li class="modal-product__tag">${u}</li>`).join(""),h=`
        <div class="swiper modal-product__slider">
      <div class="swiper-wrapper">
        ${c.map(u=>`
        <div class="swiper-slide">
          <div class="swiper-zoom-container">
          <img class="modal-product__img" src="${u}" alt="${o}" />
        </div>   
        </div>`).join("")}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
      <div class="modal-product__content">
        <p class="modal-product__title">${t}</p>
        <ul class="modal-product__tags">${l}</ul>
        <p class="modal-product__description">${o}</p>
        <p class="modal-product__shipping-information">Shipping:${i}</p>
        <p class="modal-product__return-policy">Return Policy: ${n}</p>
        <p class="modal-product__price">Price: ${s} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`;a.modalProduct.innerHTML=h,new k(".modal-product__slider",{modules:[S,M,E,A],loop:!0,zoom:{maxRatio:3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3}})}function f(){a.products.innerHTML=""}function x(){document.querySelector(".not-found").classList.add("not-found--visible")}function T(){document.querySelector(".not-found").classList.remove("not-found--visible")}function b(){document.querySelector(".loader").classList.add("visible")}function w(){document.querySelector(".loader").classList.remove("visible")}function P(){document.querySelector(".moreButton").classList.add("visible")}function p(){document.querySelector(".moreButton").classList.remove("visible")}function N(){a.modal.classList.add("modal--is-open"),document.addEventListener("keydown",$),window.addEventListener("click",L),a.closeModalBtn.addEventListener("click",_)}function _(){a.modal.classList.remove("modal--is-open"),document.removeEventListener("keydown",$),window.removeEventListener("click",L)}function $(t){t.key==="Escape"&&_()}function L(t){t.target===a.modal&&_()}async function H(t){if(!t.target.classList.contains("categories__btn"))return;document.querySelectorAll(".categories__btn").forEach(s=>s.classList.remove("categories__btn--active")),e.category=t.target.textContent,e.page=1,T(),p();try{let s;if(e.category==="All"?s=await g(e.page):s=await v(e.category,e.page),s.products.length===0){f(),x(),p();return}e.totalPage=s.total/e.per_Page,e.totalPage>1&&(P(),e.page++),f(),m(s.products),t.target.classList.toggle("categories__btn--active")}catch(s){console.log(s)}}async function R(t){b();try{let o;e.category==="All"?o=await g(e.page):o=await v(e.category,e.page),w(),m(o.products),e.totalPage<=e.page&&(p(),q.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"})),e.page++}catch(o){console.error("Error click button :",o)}}async function z(t){const o=t.target.closest(".products__item");if(!o)return;const s=o.dataset.id;N();const c=await C(s);console.log(c),I(c)}b();B().then(t=>{j(t)}).catch(t=>console.log("categories",t));g(e.page).then(t=>{w(),m(t.products),e.totalPage=t.total/e.per_Page,e.totalPage>1&&(P(),e.page++)}).catch(t=>console.log("categories",t));a.categories.addEventListener("click",H);a.products.addEventListener("click",z);a.loadMoreButton.addEventListener("click",R);
//# sourceMappingURL=index.js.map
