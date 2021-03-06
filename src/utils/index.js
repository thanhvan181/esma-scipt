import toastr from "toastr";

import "toastr/build/toastr.min.css";

export const reRender = async (component, domElement) => {
  if (component) {
    document.querySelector(domElement).innerHTML = await component.render();
  }
  if (component.afterRender) await component.afterRender();
};

export const productTemplate = (data) => {
  return /* html */ `


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
              <p class="text-sm text-gray-400 line-through">${itemshop.sale}</p>
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
          <a href=""
            class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
            to cart</a>

        </div>

        `;
    })
    .join("")}
  `;
};
export const orderTableTemplate = (data) => {
  console.log("hkkkkh", data);
  return /* html */ `
        ${data.product
          .map((item) => {
            return /* html */ `

             <tr
               v-for="product in products"
               class="group transition-colors hover:bg-gray-100"
             >
               <td class="flex items-center gap-x-4 py-4 pl-10">
                
                 <img
                   src="${item.imageIntro}"
                   alt=""
                   class="aspect-[3/2] w-40 rounded-lg border border-gray-200 object-cover object-top"
                 />
                 
               </td>
               <td class="text-center font-medium">${item.name}</td>
               <td class="text-center font-medium">${item.price}</td>
              
               <td class="text-center font-medium">${item.quantity}</td>
               <td class="text-center font-medium">${
                 item.quantity * item.price
               }</td>

             
               <td>
                 <button>
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="btn btn-remove h-8 w-8 fill-red-600"
                     data-id="${item.id}"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                     />
                   </svg>
                 </button>
               </td>
               <td></td>
             </tr>;
         

       `;
          })
          .join("")}
  `;
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
// eslint-disable-next-line consistent-return
export const getLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
};
export const logout = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if(user) {
     const logout = document.querySelector("#logout");
     console.log("User", user);
     document.querySelector("#account-user").innerHTML = user.username;

     logout.addEventListener("click", () => {
       toastr.success("Logout th??nh c??ng");
       localStorage.removeItem("user");
       localStorage.removeItem("cart");

       window.location.href = "/signin";
     });

  }
 
};
