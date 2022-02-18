import sideBar from "../../../components/admin/sidebar";
import { list, remove } from "../../../api/productapi";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../../../utils";
const ListProductPage = {
  async render() {
    const { data } = await list();
    return /* html */ `
    
  <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    ${sideBar.render()}

      <main class="flex-1 pb-8">
      <div class="flex items-center justify-between py-7 px-10">
        <div>
          <h1 class="text-2xl font-semibold leading-relaxed text-gray-800">Products</h1>
          <p class="text-sm font-medium text-gray-500">
            Let's grow to your business! Create your product and upload here
          </p>
        </div>
        <button
          class="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          
          <a href="/admin/products/add"class="text-sm font-semibold tracking-wide">Add Product</a>
        </button>
      </div>

      <ul class="flex gap-x-24 items-center px-4 border-y border-gray-200">
        <li v-for="item in status">
          <button
            class="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group"
          >
           
            <span class="font-medium"> </span>
           
          </button>
        </li>
      </ul>

      <table class="w-full border-b border-gray-200">
        <thead>
          <tr class="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td class="pl-10">
              <div class="flex items-center gap-x-4">
               
                <span>Image</span>
              </div>
            </td>
            <td class="py-4 px-4 text-center">STT</td>
            <td class="py-4 px-4 text-center">NAME</td>
            <td class="py-4 px-4 text-center">CATEGORY</td>
            <td class="py-4 px-4 text-center">PRICE</td>
           
            
            <td class="py-4 px-4 text-center">CLASSIFY</td>
          
            <td class="py-4 px-4 text-center">CUSTOM</td>
            <td class="py-4 pr-10 pl-4 text-center">
              
            </td>
          </tr>
        </thead>
        <tbody>
        ${data
          .map((element, index) => {
            return /* html */ `
            <tr
            v-for="product in products"
            class="hover:bg-gray-100 transition-colors group"
          >
            <td class="flex gap-x-4 items-center py-4 pl-10">
              <input
                type="checkbox"
                class="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
              />
              <img
                src="${element.imageIntro}"
                alt=""
                class="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
              />
              <div>
                <a href="#" class="text-lg font-semibold text-gray-700">
                 
                </a>
                <div class="font-medium text-gray-400"></div>
              </div>
            </td>
            <td class="font-medium text-center">${index + 1}</td>
            <td class="font-medium text-center">${element.name}</td>
            <td class="text-center">
              ${element.category.title}
            </td>
            <td class="font-medium text-center">
             ${element.price}
            </td>
            
           
              <td class="font-medium text-center">
             ${element.classify}
            </td>
            <td>
             <button >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-red-600 btn btn-remove" data-id=${
               element.id
             } fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"  />
                </svg>
             </button>
            
            </td>
             <td>
             <a href="/editproduct/${element.id}">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
             </a>
            
            </td>
          </tr>
            `;
          })
          .join("")}
          
        </tbody>
      </table>

      <div class="flex gap-x-2 justify-center pt-8">
        <button class="flex justify-center items-center w-8 h-8">
         
        </button>
        
        <button class="flex justify-center items-center w-8 h-8">
         
        </button>
      </div>
    </main>
    
    
    
    
   
  

   
  </div>
        `;
  },
  afterRender() {
    const btns = document.querySelectorAll(".btn");
    // tạo vòng lặp để lấy từng button element
    btns.forEach((btn) => {
      // Lấy giá trị ID thông qua thuộc tính data-id của button
      const { id } = btn.dataset;
      console.log("Id", id);
      btn.addEventListener("click", () => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        console.log("conf");
        if (confirm) {
          remove(id)
            .then(() => {
              toastr.success("Bạn đã xóa thành công");
            })
            .then(() => {
              //  window.location.href = './products'
              reRender(ListProductPage, "#app");
            });
        }
        // remove
      });
    });
  },
};
export default ListProductPage;
