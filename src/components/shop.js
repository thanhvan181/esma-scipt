import { list } from "../api/productapi";
import { sortproductAsc, get } from "../api/productapi";
import { productTemplate } from "../utils/index";
import { addTocart, getTotalItems } from "../utils/cart";
import Navbar from "../components/navbar"
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Shop = {
  async render() {
    const { data } = await list();
    // console.log("Data", data);

    return /* html */ `

         <div class="container flex items-center gap-3 py-4">
    <a href="" class="text-primary text-base">
     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
    </a>
    <span class="text-sm text-gray-400"> </span>
    <p class="font-medium text-gray-600">Shop</p>
  </div>
  <div class="container grid grid-cols-4 items-start gap-6 pt-4 pb-16">
    <div class="col-span-1 overflow-hidden rounded bg-white px-4 pb-6 shadow">
      <div class="space-y-5 divide-y divide-gray-200">
        <div>
          <h3 class="mb-3 text-xl font-medium uppercase text-gray-800">
            categoris
          </h3>
          <div class="space-y-2">
          ${data
            .map((shopcate) => {
              return /* html */ `
             <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary cursor-pointer rounded-sm focus:ring-0" />
              <label for="cat-1" class="ml-3 cursor-pointer text-gray-600">${shopcate.category.title}</label>
              <div class="ml-auto text-sm text-gray-600">(15)</div>
            </div>

            `;
            })
            .join("")}
           
          </div>
        </div>
        <div class="pt-4">
          <h3 class="mb-3 text-xl font-medium uppercase text-gray-800">
            Branchs
          </h3>
          <div class="space-y-2">
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary cursor-pointer rounded-sm focus:ring-0" />
              <label for="cat-1" class="ml-3 cursor-pointer text-gray-600">Bedroom</label>
              <div class="ml-auto text-sm text-gray-600">(15)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary cursor-pointer rounded-sm focus:ring-0" />
              <label for="cat-1" class="ml-3 cursor-pointer text-gray-600">sofa
              </label>
              <div class="ml-auto text-sm text-gray-600">(15)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary cursor-pointer rounded-sm focus:ring-0" />
              <label for="cat-1" class="ml-3 cursor-pointer text-gray-600">Bedroom</label>
              <div class="ml-auto text-sm text-gray-600">(135)</div>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="cat-1" class="text-primary cursor-pointer rounded-sm focus:ring-0" />
              <label for="cat-1" class="ml-3 cursor-pointer text-gray-600">Bedroom</label>
              <div class="ml-auto text-sm text-gray-600">(95)</div>
            </div>
          </div>
        </div>
        <div class="pt-4">
          <h3 class="mb-3 text-xl font-medium uppercase text-gray-800">
            Price
          </h3>
          <div class="mt-4 flex items-center">
            <input type="text"
              class="borde-gray-300 focus:border-primary w-full rounded px-3 py-1 text-sm text-gray-600 shadow-sm focus:ring-0"
              placeholder="min" />
            <span class="mx-3.text-gray-500"> - </span>

            <input type="text"
              class="borde-gray-300 focus:border-primary w-full rounded px-3 py-1 text-sm text-gray-600 shadow-sm focus:ring-0"
              placeholder="max" />
          </div>
        </div>
        <div class="pt-4">
          <h3 class="mb-3 text-xl font-medium uppercase text-gray-800">
            Size
          </h3>
          <div class="flex items-center gap-2">
            <div class="size-selector">
              <input type="radio" name="size" class="hidden" id="size-xs" />
              <label for="size-xs"
                class="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-gray-600 shadow-sm">XS</label>
            </div>
            <div class="size-selector">
              <input type="radio" name="size" class="hidden" id="size-s" />
              <label for="size-xs"
                class="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-gray-600 shadow-sm">S</label>
            </div>

            <div class="size-selector">
              <input type="radio" name="size" class="hidden" id="size-m" />
              <label for="size-xs"
                class="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-gray-600 shadow-sm">M</label>
            </div>
            <div class="size-selector">
              <input type="radio" name="size" class="hidden" id="size-ls" />
              <label for="size-xs"
                class="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-gray-600 shadow-sm">L</label>
            </div>
            <div class="size-selector">
              <input type="radio" name="size" class="hidden" id="size-xl" />
              <label for="size-xs"
                class="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border border-gray-200 text-xs text-gray-600 shadow-sm">XL</label>
            </div>
          </div>
        </div>
        <div class="pt-4">
          <h3 class="mb-3 text-xl font-medium uppercase text-gray-800">
            Color
          </h3>
          <div class="flex items-center gap-2">
            <input type="radio" name="color" class="hidden" id="color red" />
            <label for="color-red" class="block h-5 w-5 cursor-pointer rounded-sm border border-gray-200 shadow-sm"
              style="backgroud-color: #dc3d57"></label>

            <input type="radio" name="color" class="hidden" id="color red" />
            <label for="color-red" class="block h-5 w-5 cursor-pointer rounded-sm border border-gray-200 shadow-sm"
              style="backgroud-color: #fff"></label>

            <input type="radio" name="color" class="hidden" id="color red" />
            <label for="color-red" class="block h-5 w-5 cursor-pointer rounded-sm border border-gray-200 shadow-sm"
              style="backgroud-color: #000"></label>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-3">
      <div class="mb-4 flex items-center">
        <select name="" id="sortproduct"
          class="focus:ring-primary focus:border-primary w-44 rounded border-gray-300 px-4 py-3 text-sm text-gray-600 shadow-sm">
          <option value="asc">default soring</option>
          <option value="asc">Price low-hight</option>
          <option value="desc">Price hight-low</option>
          
        </select>
        <div class="ml-auto flex gap-2">
          <div
            class="border-primary bg-primary flex h-9 w-10 cursor-pointer items-center justify-center rounded border text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <div
            class="flex h-9 w-10 cursor-pointer items-center justify-center rounded border border-gray-300 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
        </div>
      </div>
      <div id="products" class="grid grid-cols-3 gap-6">
      ${data
        .map((itemshop) => {
          return /* html */ `

        <div class="group overflow-hidden rounded bg-white shadow">
          <div class="relative">
            <img src="${itemshop.imageIntro}" alt="" class="w-full" />
            <div
              class="absolute inset-0 flex items-center justify-center gap-2 bg-black bg-opacity-40 opacity-0 transition group-hover:opacity-100">
              <a href=""
                class="bg-primary flex h-8 w-9 items-center justify-center rounded-full text-lg text-white transition hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
              <a href=""
                class="bg-primary flex h-8 w-9 items-center justify-center rounded-full text-lg text-white transition hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </a>
            </div>

          </div>
          <div class="pt-4 pb-3 px-4">
            <a href="/products/${itemshop.id}">
              <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">${itemshop.name}</h4>
            </a>
            <div class="flex items-baseline mb-1 space-x-2">
              <p class="text-xl text-primary font-semibold">${itemshop.price}</p>
              
            </div>
            <div class="flex items-center">
              <div class="flex gap-1 text-sm text-yellow-400">
                <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg></span>
                <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg></span>

                <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg></span>

                <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg></span>


              </div>
              <div class="text-xs text-gray-500 ml-4">(140)</div>
            </div>
          </div>
          <button href=""
          data-id="${itemshop.id}"
            class="  btn_addcart block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition ">Add
            to cart</button>

        </div>

        `;
        })
        .join("")}
        
        

      </div>
    </div>
  </div>

        
        `;
  },
  async afterRender() {
    Navbar.afterRender();
    const sortProductPrice = document.querySelector("#sortproduct");
    let products = document.querySelector("#products");

    sortProductPrice.addEventListener("change", async () => {
      console.log("Change sort", sortProductPrice.value);
      const { data } = await sortproductAsc(sortProductPrice.value);
      products.innerHTML = productTemplate(data);
    });
    const btnAddToCart = document.querySelectorAll(".btn_addcart");
    btnAddToCart.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.id;
        const { data } = await get(id);
        addTocart({ ...data, quantity: 1 }, () => {
          toastr.success("Đã thêm");
          document.querySelector("#quantity-item").innerHTML = getTotalItems();
        });
      });
    });
  },
};
export default Shop;
