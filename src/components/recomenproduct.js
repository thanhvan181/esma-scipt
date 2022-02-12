import { getAll } from "../api/productapi";

const RecomendProduct = {
  async render() {
    const { data } = await getAll();
    return /* html */ `
        
         <div class="container pb-16">
      <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
        Recomment For Yours
      </h2>
      <div class="grid grid-cols-4 gap-6">
      ${data
        .map((product) => {
          return /* html */ `
       
                 <div class="group overflow-hidden rounded bg-white shadow">
            <div class="relative table-row-group">
               <a href="#">
                <img src="${product.imageIntro}" class="rounded-tl-lg rounded-tr-lg" />
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
              </div>
              
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">${product.name}</h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2">
                <p class="text-xl text-primary font-semibold">${product.price}</p>
                <p class="text-sm text-gray-400 line-through">$55.00</p>
              </div>
              <div class="flex flex-row my-3">
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XL</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XXL</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">L</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">M</a>
            <a class="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">S</a>
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
            <a href="" class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
            
          </div>
           
        
        `;
        })
        .join("")}
      </div>
    </div>

       `;
  },
};
export default RecomendProduct;
