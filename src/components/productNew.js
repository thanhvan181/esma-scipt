import { get, paginateProduct } from "../api/productapi";
import { addTocart, getTotalItems } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import Header from "../components/header";

const ProductNew = {
  async render() {
    const { data: paginate_Product, headers } = await paginateProduct();
    const listPage = [];

    const totalPage = headers["x-total-count"] / 4;
    for (let i = 1; i < totalPage + 1; i++) {
      listPage.push(
        `  <button class="page-button hover:bg-gray-700  px-2 rounded page-item w-12 h-12 font-medium" data-index="${i}">${i}</button>`
      );
    }
    console.log("TotalPage", totalPage);
    return /* html */ `
      <div class="container pb-16">
      <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
        Top new arrival
      </h2>
      <div id="home-content" class="grid grid-cols-4 gap-6">
      ${this.reRenderPage(paginate_Product)}
      </div>
    </div>
    <div class="flex items-center justify-center mb-12 text-gray-300 flex items-center space-x-2 select-none">
        <button class="h-16 w-16 p-1 hover:bg-gray-700 rounded page-control" data-action="minus"><svg fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
        </svg></button>
        <div class="space-x-1">
       
          ${listPage.join("")}
        </div>
        <button class="h-16 w-16 p-1 hover:bg-gray-700 rounded page-control" data-action="plus"><svg fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
        </svg>
        </button>
    </div>

       `;
  },
 
  afterRender() {
    Header.afterRender();
    const addEventCart = () => {
       const btnAddToCart = document.querySelectorAll(".btn_addcart");
       btnAddToCart.forEach((btn) => {
         btn.addEventListener("click", async () => {
           const id = btn.dataset.id;
           const { data } = await get(id);

           addTocart({ ...data, quantity: 1 }, () => {
             toastr.success("Đã thêm");
             console.log("Dang trong addtocart");
             document.querySelector("#quantity-item").innerHTML =
               getTotalItems();
           });
         });
       });
    }
   addEventCart();

    const pageButtons = document.querySelectorAll(".page-button");
    pageButtons.forEach((btn_page) => {
      btn_page.addEventListener("click", async (e) => {
        console.log("DataIndex", { e });
        const { data } = await paginateProduct(e.target.dataset.index);
        document.querySelector("#home-content").innerHTML =
          this.reRenderPage(data);
          addEventCart();
      });
    });
  },
   reRenderPage(data) {
    return /* html */ `
     ${data
       .map((product) => {
         return /* html */ `
       
                 <div class="group overflow-hidden rounded bg-white shadow">
            <div class="relative table-row-group">
               <a href="/products/${product.id}">
                <img src="${product.imageIntro}" class="rounded-tl-lg rounded-tr-lg"  />
              </a>
               
              <div
                class="absolute inset-0 flex items-center justify-center gap-2 bg-black bg-opacity-40 opacity-0 transition group-hover:opacity-100"
              >
             
                <a
                  href=""
                  class="bg-primary flex h-8 w-9 items-center justify-center rounded-full text-lg text-white transition hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </a>
                <a
                  href="/products/${product.id}"
                  class="bg-primary flex h-8 w-9 items-center justify-center rounded-full text-lg text-white transition hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
              </div>
              
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="/products/${product.id}">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">${product.name}</h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2">
                <p class="text-xl text-primary font-semibold">${product.price}</p>
                <p class="text-sm text-gray-400 line-through">$55.00</p>
              </div>
             
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg></span>
                </div>
                <div class="text-xs text-gray-500 ml-4">(140)</div>
              </div>
            </div>
            <button href="" data-id="${product.id}" class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition btn_addcart">Add to cart</button>
            
          </div>
           
        
        `;
       })
       .join("")}



    `;
  },
};
export default ProductNew;
